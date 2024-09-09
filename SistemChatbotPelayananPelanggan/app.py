from flask import Flask, request, jsonify
import openai

app = Flask(__name__)
openai.api_key = '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'  # Ganti dengan API key OpenAI

def get_chatbot_response(user_input):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # Ganti dengan model yang aktif
            messages=[
                {"role": "user", "content": user_input}
            ],
            max_tokens=150
        )
        return response.choices[0].message['content'].strip()
    except openai.error.RateLimitError as e:
        return f"Rate limit exceeded: {e}"
    except openai.error.OpenAIError as e:
        return f"An error occurred: {e}"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data.get("message")
    if not user_input:
        return jsonify({"error": "No input message provided"}), 400
    chatbot_response = get_chatbot_response(user_input)
    return jsonify({"response": chatbot_response})

if __name__ == '__main__':
    app.run(debug=True)