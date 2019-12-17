from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import pymongo

#Conexion a la base de datos y seleccion de la base de datos
myclient = pymongo.MongoClient("mongodb+srv://codex:codex123@cluster0-py7xc.gcp.mongodb.net/test?retryWrites=true&w=majority")
mydb = myclient["prueba"]

app = Flask(__name__,
			static_folder='./frontend/dist/',
			template_folder='./frontend/dist/')

cors = CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True )

#Metodo para hacer consultas a la base de datos
def insertDB(collection, query):
	mycol = mydb[collection]
	mydict = query
	x = mycol.insert_one(mydict)

def queryDB(collection, query):
	mycol = mydb[collection]
	doc = mycol.find(query)
	return doc

@app.route('/api/v1.0/mensaje')
def mensaje():
	return jsonify('Nuevo mensaje desde un servidor flask cambiado')

@app.route('/api/post/subirFormulario', methods=['POST'])
def subirFormulario():
	data = request.json
	print(data)
	insertDB("clientes", data)
	return jsonify('Subido correctamente')

@app.route('/api/post/queryClient', methods=['POST'])
def queryClient():
	data = request.json
	print(data)
	query = {"username":data["usuario"]}
	dbUser = queryDB("usuarios", query)
	for x in dbUser:
		if(data["contraseña"] == x["password"]):
			return jsonify("Usuario verificado")
		else:
			return jsonify("Usuario incorrecto")


@app.route('/api/post/queryDocuments', methods=['POST'])
def queryDocument():
	return 0

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def render_vue(path):
	return render_template('index.html')

if __name__ == '__main__':
	app.run(debug=True)