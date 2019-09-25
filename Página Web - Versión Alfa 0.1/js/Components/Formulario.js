Vue.component("formulario", {

    //Funcion data, son las variables que tiene el componente
    data() {
        return {
            formulario: 0
        }
    },

    //Template es lo que se mostrara al llamar al componente en el html 
    template: //html
    `
    <div>
        <div class="col-xs-12 col-sm-7 col-md-7">
            <div id="formu" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        </div>
    </div>
    `
});