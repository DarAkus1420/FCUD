<template>
    <div>
        <label class="center drop-zone">
            <input type="file" name="examinar" class="form-control-file" accept=".json,.xml,.adl" @change="readFile">     
	    </label>  
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
        /*Recordar que este objeto tiene que pasarse a los conversores de datos (xml, adl) para enviarlo al place holder
         y asi poder arrastarlo al tab del formulario, aqui
        lo hice directamente para probar el traspaso de informacion entre componentes*/
        cargarArchivo(data){    
            this.formulario = data; //Se reciben los datos cuando la accion se realiza con la promesa
            this.$emit('cargarFormulario', this.formulario); //Se emite un evento para pasar el archivo a otros componentes
        },
        readFile(event){
            let file = event.target.files['0']; //Falta agregar el for para que lea multiples archivos
            new Promise(function(resolve, reject){
                let reader = new FileReader();
                reader.onload = function (evt){
                    resolve(JSON.parse(evt.target.result)); //Se transforma el json a objeto de js
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

