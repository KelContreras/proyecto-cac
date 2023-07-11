"""
API REST con Flask y MySQL para la gestión de instrumentos.
"""

from flask import Flask, jsonify, request
import pymysql

app = Flask(__name__)


# Configurar la conexión a la base de datos
conn = pymysql.connect(
    host='localhost',
    user='root',
    password='futuro20',
    db='instrumentosdb'
)
@app.route('/instrumentos', methods=['GET'])
def get_instrumentos():
    """
    Obtiene todos los instrumentos de la base de datos.
    """
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM instrumentos")
    instrumentos = cursor.fetchall()
    cursor.close()
    instrumentos_list = []
    for instrumento in instrumentos:
        instrumento_dict = {
            'id': instrumento[0],
            'nombre': instrumento[1],
            'marca': instrumento[2],
            'precio': instrumento[3]
        }
        instrumentos_list.append(instrumento_dict)
    return jsonify(instrumentos_list)

@app.route('/instrumentos/<int:instrumento_id>', methods=['GET'])
def get_instrumento(instrumento_id):
    """
    Obtiene un instrumento de la base de datos por su ID.
    
    Parameters:
    id (int): ID del instrumento a obtener.
    
    Returns:
    dict: Diccionario con la información del instrumento encontrado.
          Si no se encuentra, se devuelve un diccionario vacío.
    """
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM instrumentos WHERE id = %s", instrumento_id)
    instrumento = cursor.fetchone()
    cursor.close()
    if instrumento:
        instrumento_dict = {
            'id': instrumento[0],
            'nombre': instrumento[1],
            'marca': instrumento[2],
            'precio': instrumento[3]
        }
        return jsonify(instrumento_dict)
    else:
        return jsonify({'message':'Instrumento no encontrado'}), 404
@app.route('/instrumentos', methods=['POST'])
def create_instrumento():
    """
    Agrega un nuevo instrumento a la base de datos.
    Parameters:
    request.json (dict): Datos del instrumento a agregar en formato JSON.
    Returns:
    dict: Diccionario con el mensaje de éxito o error.
    """
    nombre = request.json['nombre']
    marca = request.json['marca']
    precio = request.json['precio']
    cursor = conn.cursor()
    cursor.execute(
    "INSERT INTO instrumentos (nombre, marca, precio) "
    "VALUES (%s, %s, %s)",
    (nombre, marca, precio))
    conn.commit()
    cursor.close()
    return jsonify({'message': 'Instrumento creado correctamente'})

@app.route('/instrumentos/<int:instrumento_id>', methods=['PUT'])
def update_instrumento(instrumento_id):
    """
    Actualiza los datos de un instrumento en la base de datos.
    Parameters:
    id (int): ID del instrumento a actualizar.
    request.json (dict): Datos actualizados del instrumento en formato JSON.
    Returns:
    dict: Diccionario con el mensaje de éxito o error.
    """
    nombre = request.json['nombre']
    marca = request.json['marca']
    precio = request.json['precio']
    cursor = conn.cursor()
    cursor.execute(
    "UPDATE instrumentos SET nombre = %s, marca = %s, precio = %s "
    "WHERE id = %s",
    (nombre, marca, precio, instrumento_id))
    conn.commit()
    cursor.close()
    return jsonify({'message': 'Instrumento actualizado correctamente'})


@app.route('/instrumentos/<int:instrumento_id>', methods=['DELETE'])
def delete_instrumento(instrumento_id):
    """
    Elimina un instrumento de la base de datos.
    Parameters:
    id (int): ID del instrumento a eliminar.
    Returns:
    dict: Diccionario con el mensaje de éxito o error.
    """
    cursor = conn.cursor()
    cursor.execute("DELETE FROM instrumentos WHERE id = %s", instrumento_id)
    conn.commit()
    cursor.close()
    return jsonify({'message': 'Instrumento eliminado correctamente'})