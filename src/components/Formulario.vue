<template>
    <b-col sm='7' md='7' xl='7'>
        <div id="formu" ondrop="drop(event)" ondragover="allowDrop(event)">
            <p v-for="(item, key) in this.formularioBase" v-bind:key="key">
                {{key}}
                <input v-model="formularioBase[key]">
            </p>
            <hr>
           
        </div>

        <button @click="testeo()">pruebame</button>
    </b-col>
</template>

<script>
export default {
    name: 'Formulario',
    data() {
        return {
            formularioBase:{
                Nombre: "",
                Rut   : "",
                Edad  : "",
                Fecha_Nacimiento: "",
                A: "",
            },
            formularioArqeutipos:{

            }
        }
    },
    methods:{
        testeo(){
            console.log(this.formularioBase);
        }
    }
}
</script>

<style scoped>
    #formu {        /*cambios al componente que contendra el formulario*/
        width: 100%;
        height: 650px;
        border: 1px solid #aaaaaa;
    }
</style>