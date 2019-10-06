const login = new Vue({

    //Se crea el objeto vue que estara implementado en el div principal del index "div logeo"
    el: "#login",
    //se colocan los datos que se usaran en este objeto
    data:{
        form:{
            state: true, // 0 = Login , 1 = Verificacion dos pasos
            type: 0,
            email:"",
            password:"", 
            codigoTSF:""}
    },
    methods:{
        sendForm(){
            if(this.validaType()){
                console.log(this.form.email + this.form.password);
                this.form.type = 1;
                
            }
        },
        sendAutentificator(){
            if(this.validaType()){
                console.log(this.form.email + this.form.password);
                this.form.state = false;
                
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
        validaRepetirPassword(){
            if(this.form.password==this.form.passwordos){
                return false;
            } else{
                return true;
            }
        },
        title(){
            return (this.form.type==0)?'Login':'Ingrese codigo verificacion';
        }
    }
});