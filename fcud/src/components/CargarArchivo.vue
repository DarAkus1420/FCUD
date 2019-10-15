<template>
    <div>
        <div class="col-xs-12 col-sm-5 col-md-5">
        <form action="#" method="post" enctype="multipart/form-data" class="center">
            <label id="drop-zone">
                <input type="file" name="examinar" class="form-control-file" accept=".json,.xml,.adl">
		    </label>
            
        </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CargarArchivo'
}
</script>