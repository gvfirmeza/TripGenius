from flask import request, jsonify
from . import db
from .models import User
from . import create_app

def init_routes(app):

    @app.route('/', methods=['GET'])
    def hw():
        return "Hello World"

    @app.route('/login', methods=['POST'])
    def login():
        data = request.form
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()
        if user and user.password == password:
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"message": "Invalid credentials"}), 401

    @app.route('/signup', methods=['POST'])
    def signup():
        data = request.form
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
            return jsonify({"message": "User already exists"}), 400

        new_user = User(username=username, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully"}), 201