<template>
    <div>
        <label class="center drop-zone">
            <input type="file" name="examinar" class="form-control-file" accept=".json,.xml,.adl" @change="cargarArchivo">
        
	    </label>  
        {{formulario}} 
        <button @click="mostrar()">HOLA</button>
    </div>       
</template>

<script>
export default {
    name: 'CargarArchivo',
    data(){
        return{
            archivo: 0,
            formulario: undefined,

        }
    },
    methods:{
        cargarArchivo(events){

            
            this.archivo = event.target.files;
            // let promesa = new Promise()

            for(let i = 0, f; f = this.archivo[i];i++){
                let lector = new FileReader();
                lector.onload = function(e) {
                    let contenido = e.target.result;
                    let hola = JSON.parse(contenido);
                    console.log(hola);
                }
                lector.readAsText(f);
            };

        
        },
        mostrar(){
            console.log(this.hola);
        }
        
    }
}
</script>

<style scoped>
    .drop-zone {        /*dimensiones de cuadro para subir archivos*/
        width: 100%;
        height: auto;
        border: 2px rgb(0, 0, 0, 0.3);
        font-family: Arial;
        text-align: center; 
        line-height: 700%;  /*separacion*/
        font-size: 100%;
        color: rgba(0, 0, 0, .3);
        background-color: rgba(239, 243, 243, 0.5);
    }

</style>

