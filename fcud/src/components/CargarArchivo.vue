<template>
    <form action="#" method="post" enctype="multipart/form-data" class="center">
        <label id="drop-zone">
            <input type="file" name="examinar" class="form-control-file" accept=".json,.xml,.adl">
	    </label>           
    </form>
</template>

<script>
export default {
    name: 'CargarArchivo'
}
</script>

<style scoped>
    #drop-zone {        /*dimensiones de cuadro para subir archivos*/
        width: 100%;
        height: 80%;
        border: 2px dashed rgba(0, 0, 0, 0.3);
        font-family: Arial;
        text-align: center; 
        line-height: 700%;  /*separacion*/
        font-size: 90%;
        color: rgba(0, 0, 0, .3);
        background-color: rgba(239, 243, 243, 0.5);
        background-image: url("../assets/insert.png");
        background-repeat: no-repeat; /*quita el modo mosaico*/
        background-position-x: 95%;
        background-position-y: 85%;
        background-size: 20%;
    }

    .center {       /*configuracion para centrar*/
        margin: auto;
        padding: 10px;
    }
</style>

