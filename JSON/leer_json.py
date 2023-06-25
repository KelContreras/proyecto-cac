import json, os
script = os.path.dirname(__file__)

with open(script+'/data.json') as file:
    data= json.load(file)
    for intrumentos in data ["instrumentos"]:
        print("nombre", intrumentos["nombre"])
        print("tipo", intrumentos["tipo"])
        print("precio", intrumentos["precio"])
        print("marca", intrumentos["marca"])
        print("")
        