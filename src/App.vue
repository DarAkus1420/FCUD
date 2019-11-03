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
					<Formulario v-bind:formularioArquetipos1="this.formulario"></Formulario>
            		<!--Es el placeholder-->
					<b-col sm='5' md='5' xl='5'>
						<CargarArchivo @cargarFormulario='formulario = $event'></CargarArchivo>
						<PlaceHolder></PlaceHolder>
					</b-col>
				</b-row>
			</b-container>
        	<b-container>
        		<!--Aqui esta el boton con el cual podremos subir el archivo a la base de datos-->
            	<SubirArchivo></SubirArchivo>
        	</b-container>
			<button @click="mostrar()">hola</button>
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
			state: true,
			formulario: undefined
		}
	},
	methods:{
		mostrar(){
			console.log(this.formulario);
		}
	}
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


	.login{
		background-size: cover;
		width: 50%;
	}
	
	#cuadroArras {      /*dimensiones de cuadro para subir archivos en forma de arrastre */
    	width: 200%;
	}


	.wena{
    	font-size: 30cm;
    	color:red;
	}
</style>