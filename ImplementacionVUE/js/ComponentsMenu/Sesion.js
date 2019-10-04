Vue.component('Sesion',{

    data() {
        return {
            
        }
    },
    template://html
    `
    <div>
        
    </div>
    `
    ,
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
    
});