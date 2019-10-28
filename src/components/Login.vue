<template>
    <b-container>
            <b-row align-v="center">
                <b-col sm="8" xs="8" md="12" align-self="center"> 
                    <b-form @submit.prevent="form.type==0? sendForm():sendAutentificator()">
                        <b-card id="panel">
                            <h4>{{ title }}</h4>
                            <b-row id='pad'>
                                <b-col xs='12' sm='12' md='12' v-if="form.type==0">
                                    <input class="form-control" type="email"  placeholder="Email" v-model="form.email">
                                </b-col>
                                <b-col xs='12' sm='12' md='12' v-else-if="form.type==1">
                                    <input class="form-control" type="text"  placeholder="Codigo" v-model="form.codigoTSF">
                                </b-col>
                            </b-row>
                            <b-row id="pad">
                                <b-col xs="12" sm="12" md="12" v-if="form.type==0">
                                    <input class="form-control" type="password" :class="{'error':validaPassword}" placeholder="Contraseña" v-model="form.password" >
                                </b-col>
                            </b-row>
                            <b-row id="pad" class="ancho">
                            <b-col sm='10' md='12'>
                                    <b-button type='submit' block variant="primary" v-if="form.type==0">Iniciar sesión</b-button>
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
                email:"",
                password:"", 
                codigoTSF:""}
            }
    },
    methods:{
        sendForm(){
            if(this.validaType()){
                //Implementar php
                console.log(this.form.email + this.form.password);
                this.form.type = 1;
            }
        },
        sendAutentificator(){
            if(this.validaType()){
                //Implementar php
                console.log(this.form.codigoTSF);
                
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
            
        }
    },
    computed:{
        validaEmail(){
            var exp = /^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+))|(".+"))@(([^<>()[].,;:\s@"]+.)+[^<>()[].,;:\s@"]{2,})$/i;
            if(exp.test(this.form.email)){
                return false;
            } else{
                return true;
            }
        },
        validaPassword(){
            var exp = /^(?=.\d)(?=.[a-záéíóúüñ]).[A-ZÁÉÍÓÚÜÑ]/;
            if(exp.test(this.form.password)){
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