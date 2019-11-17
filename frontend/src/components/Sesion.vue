<template>
     <div>
        <button @click="subir();"> llama al php</button>
    </div>
</template>

<script>
export default {
    name: 'Sesion',
    methods:
    {
        InicioSesion(Nombre,Contraseña){
            var parametros={
            "Nomb":Nombre,
            "Con":Contraseña
            }    
            $.ajax({
                data:parametros,
                type:'POST',
                url:'PHP/ejempl1.php',
                success:function(){},
                error:function(){}
            });
        }
    }
}
</script>