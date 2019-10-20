<template>
    <div>
        <div class="col-xs-12 col-sm-7 col-md-7">
            <div id="formu" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        </div>
    </div>
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