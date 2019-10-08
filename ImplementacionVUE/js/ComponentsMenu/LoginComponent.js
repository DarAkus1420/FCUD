var loginComponent = {

    //Funcion data, son las variables que tiene el componente
    data() {
        return{
            archivo: 0 //Archivo recibido
        }
    },
    //Template es lo que se mostrara al llamar al componente en el html 
    template: //html
    `
    <div class="container">
        <div class="divcont">      
            <form @submit.prevent="form.type==0? sendForm():sendAutentificator()">
                <div id="panel" class="panel panel-default">
                    <div class="panel-heading">
                        <h4>{{ title }}</h4>
                    </div>
                    <div class="panel-body">
                        <div id="pad" class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12" v-if="form.type==0">
                                <input class="form-control" type="email"  placeholder="Email" v-model="form.email">
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12" v-else-if="form.type==1">
                                <input class="form-control" type="text"  placeholder="Codigo" v-model="form.codigoTSF">
                            </div>
                        </div>
                        <div id="pad" class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12" v-if="form.type==0">
                                <input class="form-control" type="password" :class="{'error':validaPassword}" placeholder="Contraseña" v-model="form.password" >
                            </div>
                        </div>
                        <div id="pad" class="row">
                            <button class="btn btn-primary" v-if="form.type==0">Iniciar sesión</button>
                            <button class="btn btn-primary" v-else-if="form.type==1">Validar Codigo</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    `
};