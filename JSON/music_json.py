import json
data={}
data["instrumentos"] = []
data['instrumentos'].append({
     "nombre": "Guitarra",
    "tipo": "Instrumento",
    "precio": 500,
    "marca": "Fender"
})

data['instrumentos'].append({
    "nombre": "Batería",
    "tipo": "Instrumento",
    "precio": 2000,
    "marca": "Pearl"
})

data['instrumentos'].append({
    "nombre": "Micrófono",
    "tipo": "Accesorio",
    "precio": 100,
    "marca": "Shure"
})

with open('data.json', 'w') as file:
    json.dump(data, file, indent=4)
