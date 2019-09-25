Vue.component("cargararchivo", {

    //Funcion data, son las variables que tiene el componente
    data() {
        return{
            archivo: 0 //Archivo recibido
        }
    },
    //Template es lo que se mostrara al llamar al componente en el html 
    template: //html
    `
    <div>
        <form action="#" method="post" enctype="multipart/form-data" class="center">
            <label id="drop-zone">
                <input type="file" name="examinar" class="form-control-file">
		    </label>
            <button type="submit" id="Enviar" class="center">Enviar<img src="Assets/clip.png" height="50"></button><br>
        </form>
    </div>
    `
});