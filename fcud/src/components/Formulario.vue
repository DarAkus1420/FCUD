<template>
    <b-col sm='7' md='7'>
        <div id="formu" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    </b-col>
</template>

<script>
export default {
    name: 'Formulario',
    data() {
        return {
            formulario: 0
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