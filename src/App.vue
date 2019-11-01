<template>
  	<div id="app">
		<br>
		<Login class="login" @cambioEstado='state = $event' v-if="state"></Login>
		<div id="menu" v-if="!state">
			<b-container>
            	<!--Se muestran los formularios-->
				<Tutorial></Tutorial>            
			</b-container>
			<b-container>
				<b-row>
					<Formulario></Formulario>
            		<!--Es el placeholder-->
					<b-col sm='5' md='5' xl='5'>
						<CargarArchivo></CargarArchivo>
						<PlaceHolder></PlaceHolder>
					</b-col>
				</b-row>
			</b-container>
        	<b-container>
        		<!--Aqui esta el boton con el cual podremos subir el archivo a la base de datos-->
            	<SubirArchivo></SubirArchivo>
        	</b-container>
		</div>
	</div>
</template>

<script>

import Sesion from './components/Sesion.vue'
import SubirArchivo from './components/SubirArchivo.vue'
import Tutorial from './components/Tutorial.vue'
import PlaceHolder from './components/PlaceHolder.vue'
import CargarArchivo from './components/CargarArchivo.vue'
import Formulario from './components/Formulario.vue'
import Login from './components/Login.vue'


export default {
	name: 'app',
  	components: {
		Tutorial,
		SubirArchivo,
		Sesion,
		PlaceHolder,
		CargarArchivo,
		Formulario,
		Login
	},
	data(){
		return{
			state: true
		}
	},
}
</script>

<style>
	#menu {     /*cambios al componente de menu*/
    	width: 95%;
    	margin: auto;
    	line-height: 50%;
    	background-color: #2f3136;
    	padding-top: 1%;    /*limite superior*/
    	padding-bottom: 1%;
    	border-radius: 1%;
	}
	
	body{
		background:#202225 !important;
	}

	.login{
		background-size: cover;
		width: 50%;
	}
	
	#cuadroArras {      /*dimensiones de cuadro para subir archivos en forma de arrastre */
    	width: 200%;
	}

	.center {       /*configuracion para centrar*/
    	margin: auto;
    	padding: 10px;
	}

	.wena{
    	font-size: 30cm;
    	color:red;
	}

	#drop-zone {        /*dimensiones de cuadro para subir archivos*/
    	width: 100%;
    	height: 80%;
    	border: 2px dashed #2f3136;
    	font-family: Arial;
    	text-align: center; 
    	line-height: 700%;  /*separacion*/
    	font-size: 90%;
    	color: #2f3136;
    	background-color: #202225;
    	background-image: url("./assets/insert.png");
    	background-repeat: no-repeat; /*quita el modo mosaico*/
    	background-position-x: 95%;
    	background-position-y: 85%;
    	background-size: 20%;
	}
</style>