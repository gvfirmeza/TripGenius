import google.generativeai as genai

genai.configure(api_key="AIzaSyBWTnGlT6hdGKu50IHaYP8-MgiSlKCWS-k")

model = genai.GenerativeModel('gemini-1.5-flash')

response = model.generate_content("Escreva uma receita de cheddar")
print(response.text)