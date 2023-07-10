"""
API para obtener instrumentos musicales.
"""
import json
from flask import Flask, jsonify
app = Flask(__name__)
@app.route('/instrumentos', methods=['GET'])
def get_instrumentos():
    """
    Obtiene la lista de instrumentos.
    """
    with open('data.json', 'r', encoding='utf-8') as file:
        data = json.load(file)
    return jsonify(data)
if __name__ == '__main__':
    app.run()
