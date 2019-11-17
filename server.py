from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__,
			static_folder='./frontend/dist/',
			template_folder='./frontend/dist/')

cors = CORS(app, resources={r"/api/*": {"origins": "*"}} )

@app.route('/api/v1.0/mensaje')
def mensaje():
	return jsonify('Nuevo mensaje desde un servidor flask')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def render_vue(path):
	return render_template('index.html')

if __name__ == '__main__':
	app.run(debug=True)