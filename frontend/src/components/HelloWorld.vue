<template>
    <div class="">
        <p>{{ mensaje }}</p>
        <button @click="mostrar">WENA</button>
        <button @click="myAwesomeMethod">holamundo</button>
    </div>
</template>

<script>
import axios from 'axios'
import XMLInterpreter from '../mixins/Interpreter/XMLInterpreter.js'
export default {
    mixins: [XMLInterpreter],
    name: 'Main',
    data(){
        return{
            mensaje: 'NuevoMensajeVue'
        }
    },
    methods: {
        getMensaje(){
            const path = 'http://127.0.0.1:5000/api/v1.0/mensaje';
            axios.get(path).then((respuesta) =>{
                this.mensaje = respuesta.data
            })
            .catch((error) => {
                console.log(error);
            })
        },
        mostrar(){
            this.getMensaje();
            console.log("Script 1")
        },
        hola(){
            this.myAwesomeMethod();
        }
    },
    mounted() {
        this.myAwesomeMethod();
    },
}
</script>

</script>

<style lang="css" scoped>
    
</style>