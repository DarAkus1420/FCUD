<template>
    <b-container>
            <b-row align-v="center">
                <b-col sm="8" xs="8" md="12" align-self="center"> 
                    <b-form @submit.prevent="form.type==0? sendForm():sendAutentificator()">
                        <b-card id="panel">
                            <h4>{{ title }}</h4>
                            <b-row id='pad'>
                                <b-col xs='12' sm='12' md='12' v-if="form.type==0">
                                    <input class="form-control" type="text"  placeholder="Usuario" v-model="formulario.usuario">
                                </b-col>
                                <b-col xs='12' sm='12' md='12' v-else-if="form.type==1">
                                    <input class="form-control" type="text"  placeholder="Codigo" v-model="formulario.codigoTSF">
                                </b-col>
                            </b-row>
                            <b-row id="pad">
                                <b-col xs="12" sm="12" md="12" v-if="form.type==0">
                                    <input class="form-control" type="password" :class="{'error':validaPassword}" placeholder="Contraseña" v-model="formulario.contraseña" >
                                </b-col>
                            </b-row>
                            <b-row id="pad" class="ancho">
                            <b-col sm='10' md='12'>
                                    <b-button type="submit" block variant="primary" v-if="form.type==0">Iniciar sesión</b-button>
                                    <b-button type='submit' block variant="primary" v-else-if="form.type==1">Validar Codigo</b-button>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-form>
                </b-col>
            </b-row>
    </b-container>
</template>

<script>
export default {
    data(){
        return {
            form:{
                state: true, // 0 = Login , 1 = Verificacion dos pasos
                type: 0,
            },
            formulario:{
                usuario:"",
                contraseña:"", 
                codigoTSF:""
            }
        }

    },
    methods:{
        sendForm(){
            if(this.validaType()){
                //Implementar python
                console.log(this.formulario.usuario + this.formulario.contraseña);
                this.form.type = 1;
                console.log(JSON.stringify(this.formulario))
                const path = 'http://127.0.0.1:5000/api/post/queryClient';
                fetch(path, {    
                    method: 'POST',
                    credentials: "include",
                    body: JSON.stringify(this.formulario),
                    cache: "no-cache",
                    headers: new Headers({
                        'Acept': 'application/json',
                        "content-type": "application/json"
                    })
                })
                .then(response => {
                    if(response.ok){
                        return response.json()
                    }else{
                        throw 'Error en la llamada';
                    }
                })
                .then((texto) => {
                    console.log(texto);
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        },
        sendAutentificator(){
            if(this.validaType()){
                //Implementar php
                console.log(this.formulario.codigoTSF);
                
                this.form.state = false;
                this.$emit('cambioEstado', this.state);
            }
        },
        validaType(){
            if(this.form.type==0 && !this.validaEmail && !this.validaPassword){
                return true;
            }
            else if(this.form.type==1 && this.validaCodigo()){

            }
            else if(this.form.type==1 && !this.validaEmail && !this.validaRepetirPassword){
                return true;
            }
            else if(this.form.type==2 && !this.validaEmail){
                return true;
            }
            return true;
        },
        validaCodigo(){ //metodo que valida el codigo de verificacion de dos pasos
            
        },
        enviarArchivo(){
            
        }
    },
    computed:{
        validaEmail(){
            var exp = /^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+))|(".+"))@(([^<>()[].,;:\s@"]+.)+[^<>()[].,;:\s@"]{2,})$/i;
            if(exp.test(this.formulario.usuario)){
                return false;
            } else{
                return true;
            }
        },
        validaPassword(){
            var exp = /^(?=.\d)(?=.[a-záéíóúüñ]).[A-ZÁÉÍÓÚÜÑ]/;
            if(exp.test(this.formulario.contraseña)){
                return false;
            } else{
                return true;
            }
        },
        title(){
            return (this.form.type==0)?'Login':'Ingrese codigo verificacion';
        }
    },
}
</script>

<style scoped>
    #pad{
		padding: 1.5%;
	}

    #panel{
		text-align: center;
	}
</style>