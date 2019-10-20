<template>
    <div>
        <div class="col-xs-12 col-sm-5 col-md-5">
         <div id="arquetipos">
             <img id="drag1" src="../assets/placeholder.jpg" draggable="true" ondragstart="drag(event)" width="408" height="150">
         </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cabecera',
    data(){
        return{
            arquetipos: [12, 2]
        }
    }
};
</script>

<style scoped>
    #arquetipos {       /*cambios al componente que contendran los arquetipos*/
        width: 100%;
        height: 534px;
        border: 1px solid #aaaaaa;
        overflow: scroll; /*agrega scroll al cuadro de arquetipos*/
    }
</style>
