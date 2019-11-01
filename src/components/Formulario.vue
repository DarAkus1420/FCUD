<template>
    <b-col sm='7' md='7' xl='7'>
        <b-form >
            <b-card bg-variant="dark" no-body>
            <b-tabs content-class="mt-4" card pills fill>
            <b-tab title="Datos Obligatorios" class="tab">
                <p v-for="(item, key) in this.formularioBase" v-bind:key="key">
                    <b-form-group v-bind:description="key"></b-form-group>
                    <b-form-input v-model="formularioBase[key]"></b-form-input>
                </p>
                <b-button @click="testeo()" variant="primary">Prueba de Formulario</b-button>
            </b-tab>
            <b-tab title="Otros Datos" ondrop="dop(event)" ondragover="allowDropEvent(event)">
                <p>Aquí se agregan los arquetipos</p>
            </b-tab></b-tabs></b-card></b-form>
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
            },
            formularioArquetipos:{

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
    .pills{
        color: black;
    }
</style>