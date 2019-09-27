Vue.component("placeholder", {
    
    //Funcion data, son las variables que tiene el componente
    data(){
        return{
            arquetipos: [12, 2] //Arreglo de archivos
        }
    },
    
    //Template es lo que se mostrara al llamar al componente en el html 
    template: //html
    `
    <div class="col-xs-12 col-sm-5 col-md-5">
        <div id="arquetipos">
            <img id="drag1" src="Assets/placeholder.jpg" draggable="true" ondragstart="drag(event)" width="408" height="150">
        </div>
        <br>
        <cargararchivo></cargararchivo>
    </div>
    `

});