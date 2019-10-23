<template>
  	<div id="app">
		<br>
		<div id="menu">
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
import styles from './assets/estilo.css'

export default {
	name: 'app',
  	components: {
		Tutorial,
		SubirArchivo,
		Sesion,
		PlaceHolder,
		CargarArchivo,
		Formulario
	}
}
</script>

<style>
	#menu {     /*cambios al componente de menu*/
    	width: 95%;
    	margin: auto;
    	line-height: 50%;
    	background-color: rgba(239, 243, 243, 0.5);
    	padding-top: 1%;    /*limite superior*/
    	padding-bottom: 1%;
    	border-radius: 1%;
	}
	
	.body{
    	background-size: cover;
    	background-image: url(./assets/test.png);
	}

	#tapaFondo{
    	background-color:rgba(0,0,0,0.6);
    	width: 100%;
    	height: 100%;
	}

	#panel{
		text-align: center;
		width: 35%;
	}
	#pad{
		padding: 1.5%;
	}

	#login{
		z-index: 1;
		position: absolute;
		width: 50%;
		height: 60%;
		top: 30%;
		left: 35%;
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
    	border: 2px dashed rgba(0, 0, 0, 0.3);
    	font-family: Arial;
    	text-align: center; 
    	line-height: 700%;  /*separacion*/
    	font-size: 90%;
    	color: rgba(0, 0, 0, .3);
    	background-color: rgba(239, 243, 243, 0.5);
    	background-image: url("./assets/insert.png");
    	background-repeat: no-repeat; /*quita el modo mosaico*/
    	background-position-x: 95%;
    	background-position-y: 85%;
    	background-size: 20%;
	}
</style>