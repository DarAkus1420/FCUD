<template>
    <div>
        <label class="center drop-zone">
            <input type="file" name="examinar" class="form-control-file" accept=".json,.xml,.adl" @change="readFile">     
	    </label>  
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
        cargarArchivo(data){    
            this.formulario = data;
            this.$emit('cargarFormulario', this.formulario);
        },
        mostrar(){
            console.log(this.formulario);
        },
        readFile(event){
            let file = event.target.files['0'];
            new Promise(function(resolve, reject){
                let reader = new FileReader();
                reader.onload = function (evt){
                    resolve(JSON.parse(evt.target.result));
                };
                reader.readAsText(file);
                reader.onerror = reject;
            })
            .then(this.cargarArchivo)
            .catch(function(err){
                console.log(err)
            });

            
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

