<template>
    <b-col sm='7' md='7' xl='7'>
        <div id="formu" ondrop="drop(event)" ondragover="allowDrop(event)" >
            <p v-for="(item,key) in formularioBase" v-bind:key="item.id" >
                {{key}} <input v-model="formularioBase.Nombre"></input>
            </p>
        </div>
    </b-col>
</template>

<script>
export default {
    name: 'Formulario',
    data() {
        return {
            formularioBase:{
                Nombre: "123",
                Rut   : "",
                Edad  : "",
                Fecha_Nacimiento: "",
            }
        }
    },
}
</script>

<style scoped>
    #formu {        /*cambios al componente que contendra el formulario*/
        width: 100%;
        height: 650px;
        border: 1px solid #aaaaaa;
    }
</style>