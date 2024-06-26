from flask import request, jsonify
from . import db
from .models import User
import google.generativeai as genai
import jwt
import datetime
from functools import wraps

# Configure JWT secret key
SECRET_KEY = "your_secret_key"

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('x-access-token')
        if not token:
            return jsonify({"message": "Token is missing"}), 403

        try:
            data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            current_user = User.query.filter_by(id=data['user_id']).first()
        except Exception as e:
            return jsonify({"message": "Token is invalid"}), 403

        return f(current_user, *args, **kwargs)

    return decorated

def init_routes(app):

    @app.route('/', methods=['GET'])
    def hw():
        return "Hello World"

    @app.route('/login', methods=['POST'])
    def login():
        data = request.form
        if not data:
            return jsonify({"message": "No data provided"}), 400

        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return jsonify({"message": "Username and password are required"}), 400

        user = User.query.filter_by(username=username).first()

        if user and user.password == password:
            token = jwt.encode({
                'user_id': user.id,
                'username': user.username,
                'password': user.password,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
            }, SECRET_KEY, algorithm="HS256")
            return jsonify({"message": "Login successful", "token": token}), 200
        else:
            return jsonify({"message": "Invalid credentials"}), 401

    @app.route('/signup', methods=['POST'])
    def signup():
        data = request.form
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not username or not email or not password:
            return jsonify({"message": "Username, email, and password are required"}), 400

        if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
            return jsonify({"message": "User already exists"}), 400

        new_user = User(username=username, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully"}), 201

    @app.route('/generate_response', methods=['POST'])
    @token_required
    def generate_response(current_user):

        if current_user.credits <= 0:
            return jsonify({"message": "Insufficient credits"}), 403

        data = request.get_json()
        prompt = data.get('prompt', 'Crie um roteiro de viagem...')

        genai.configure(api_key="AIzaSyAPkahVrBQyZMsZPZVFDgV_uW7rtUoCoxs")
        model = genai.GenerativeModel('gemini-1.5-flash')
        
        response = model.generate_content(prompt)

        current_user.credits -= 1
        db.session.commit()

        return jsonify({"text": response.text}), 200