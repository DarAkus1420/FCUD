<template>
  	<div id="app">
		<div id="menu">
		<div class="container">
            <!--Se muestran los formularios-->
			<Tutorial></Tutorial>
            <Formulario></Formulario>
            <!--Es el placeholder-->

            <CargarArchivo></CargarArchivo>
            <PlaceHolder></PlaceHolder>
        </div>
        <br>
        <div class="container ">
        	<!--Aqui esta el boton con el cual podremos subir el archivo a la base de datos-->
            <SubirArchivo></SubirArchivo>
        </div>
        <div class="container">   
        </div>
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