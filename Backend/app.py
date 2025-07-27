from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os

import pdfplumber
import docx

app = Flask(__name__)
CORS(app)

model=joblib.load('resume_model.pkl')
vectorizer=joblib.load('vectorizer.pkl')

@app.route('/predict',methods=['POST'])
def predict():
    data=request.get_json()
    resume_text=data.get('text', '')
    if not resume_text.strip():
        return jsonify({'category': 'Empty resume text provided'}), 400

    vectorized=vectorizer.transform([resume_text])
    prediction=model.predict(vectorized)[0]
    return jsonify({'category': prediction})

@app.route('/upload',methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    file = request.files['file']
    filename = file.filename.lower()
    text = ""
    try:
        if filename.endswith('.pdf'):
            with pdfplumber.open(file) as pdf:
                for page in pdf.pages:
                    text+=page.extract_text() or ""
        elif filename.endswith('.docx'):
            doc=docx.Document(file)
            for para in doc.paragraphs:
                text+=para.text+"\n"
        else:
            return jsonify({'error': 'Unsupported file format'}),400
        return jsonify({'text': text.strip()})
    except Exception as e:
        return jsonify({'error':str(e)}),500

if __name__ =='__main__':
    app.run(port=5000, debug=True)
