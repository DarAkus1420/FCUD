<template>
    <div>
        <div class="col-xs-12 col-sm-5 col-md-5">
         <div id="arquetipos">
             <img id="drag1" src="../assets/placeholder.jpg" draggable="true" ondragstart="drag(event)" width="408" height="150">
         </div>
        <br>
        
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
}
</script>