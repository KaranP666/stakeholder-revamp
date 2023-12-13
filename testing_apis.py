from flask import Flask, request, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

uploaded_pdfs = {}

@app.route('/api/upload-pdf', methods=['POST'])
def upload_pdf():
    pdf_file = request.files['pdf_file']
    pdf_id = str(hash(pdf_file.read()))
    pdf_file.seek(0)
    uploaded_pdfs[pdf_id] = pdf_file.read()
    return jsonify({'pdf_id': pdf_id})

@app.route('/api/process', methods=['POST'])
def process():
    user_question = request.json.get('user_question')
    pdf_id = request.json.get('pdf_id')

    pdf_content = uploaded_pdfs.get(pdf_id, '')

    response = {"chat_history": [{"content": "manual. response.. from model."}]}
    chat_history = response.get('chat_history', [])

    result = []
    for i, message in enumerate(chat_history):
        result.append({
            'content': message.get('content', ''),
            'user': 'user' if i % 2 == 0 else 'bot'
        })

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)