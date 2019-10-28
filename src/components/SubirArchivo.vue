<template>
    <b-col sm='5' md='3'>
        <b-button id="Subir archivo" variant="success">Subir Archivo<img src="../assets/buffer.png" id="img-small"></b-button><br>
    </b-col>
</template>

<script>
export default {
    name: 'SubirArchivo',
    methods:{
        leerArchivo(e) {
            let archivo = e.target.files[0];
            if (!archivo) {
                return;
            }
            let lector = new FileReader();
            lector.onload = function(e) {
                let contenido = e.target.result;
                mostrarContenido(contenido);
            };
            lector.readAsText(archivo);
        },
        mostrarContenido(contenido) {
            contenido=JSON.stringify(contenido,null,4);
            contenido=contenido.slice(4)
            console.log(contenido)
        }
    }
}
</script>

<style scoped>
    #img-small {        /*tamaño imagenes*/
        width: 10%;
    }
</style>