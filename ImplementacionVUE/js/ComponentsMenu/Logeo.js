Vue.component('logeo',{

    data() {
        return {
            
        }
    },
    template://html
    `
    <div>
        <button @click="subir();"> llama al php</button>
    </div>
    `
    ,
    methods:
    {
        subir()
            {
                $.ajax({
                    type:'POST',
                    url:'PHP/ejempl1.php',
                    success:function(){},
                    error:function(){}
                });
            }
    }
    
});

