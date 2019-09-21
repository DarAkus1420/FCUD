Vue.component("cargararchivo", {

    data() {
        return{
            archivo: 0 //Archivo recibido
        }
    },
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