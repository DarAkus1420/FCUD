<template>
    <b-col sm='7' md='7' xl='7'>
        <b-form>
            <div class="text-light">
            <b-card bg-variant="dark"  no-body>
            <b-tabs content-class="mt-4" card pills fill>
            <b-tab title="Datos Obligatorios" class="tab">
                <p v-for="(item, key) in this.formularioBase" v-bind:key="key">
                    <b-form-group v-bind:description="key"></b-form-group>
                    <b-form-input v-model="formularioBase[key]" v-if="cargado"></b-form-input> <!-- Hacerlo de la forma legal "investiga"-->
                    <b-form-input v-model="formularioBase[key]" disabled v-else></b-form-input> 
                </p>
                <b-button @click="testeo()" variant="primary">Prueba de Formulario</b-button>
            </b-tab>
            <b-tab title="Otros Datos" ondrop="dop(event)" ondragover="allowDropEvent(event)"> <!--Falta lograr que cuando se registre el cambio en la variable-->
                <p v-for="(item, key) in this.formularioArquetipos" v-bind:key="key">          <!--se creen todos los inputs y forms dentro del tab-->
                    <b-form-group v-bind:description="key"></b-form-group>
                    <b-form-input v-model="formularioArquetipos[key]" v-if="cargado"></b-form-input> <!-- Hacerlo de la forma legal "investiga"-->
                    <b-form-input v-model="formularioArquetipos[key]" disabled v-else></b-form-input> 
                </p>
            </b-tab></b-tabs></b-card></div></b-form>
    </b-col>
</template>

<script>
export default {
    name: 'Formulario',
    data() {
        return {
            formularioBase:{
                Nombre: "Inserte Nombre",
                Rut   : "123",
                Edad  : "99",
                Fecha_Nacimiento: "123",
            },
            formularioArquetipos: this.formularioArquetipos1, //Se asigna el dato recibido a la variable
            cargado: false,

        }
    },
    methods:{
        testeo(){
            console.log(this.formularioBase);
        }
    },
    props:['formularioArquetipos1'] //Prop para recibir el formulario (cambiar nombre)
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

    .colorcito{
        background-color: #36393F;
    }
</style>