<template>
    <div>
    <b-card bg-variant="dark" no-body>
        <div class="text-light">
        <b-tabs content-class="mt-4" card pills fill>
            <b-tab title="Arquetipo 1">
                <b-button v-b-toggle.collapse-1 variant="primary" block>Caracteristica</b-button>
                <b-card bg-variant="dark" nobody>
                    <b-card-header class="p-1" header-bg-variant="dark" header-border-variant="dark">
                        Titulo
                    </b-card-header>
                    <b-card-body>
                        <b-card-text>Texto de explicación</b-card-text>
                        <b-collapse id="collapse-1">
                            <img id="drag1" src="../assets/placeholder.jpg" draggable="true" ondragstart="drag(event)">
                            <b-button v-b-toggle.collapse-1-inner size="sm" class="p-1">Caracteristica Interna</b-button>
                            <b-collapse id="collapse-1-inner" class="mt-2">
                                <b-card bg-variant="dark" nobody>
                                    <img id="drag1" src="../assets/placeholder.jpg" draggable="true" ondragstart="drag(event)">
                                </b-card>
                            </b-collapse>
                        </b-collapse>
                    </b-card-body>
                </b-card>
            </b-tab>
            <b-tab title="Arquetipo 2">
                <b-card bg-variant="dark" no-body class="mb-1">
                    <b-card-header class="p-1" header-bg-variant="dark" header-border-variant="dark">
                        <b-button block v-b-toggle.accordion-1 variant="primary" >Caracteristica 2</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text>Texto de explicación</b-card-text>
                        <img id="drag1" src="../assets/placeholder.jpg" draggable="true" ondragstart="drag(event)">
                    </b-card-body>
                    </b-collapse>
                 </b-card>
            </b-tab>
        </b-tabs>
        </div>
    </b-card>
    </div>
</template>

<script>
export default {
    name: 'Cabecera',
    data(){
        return{
            arquetipos: [12, 2]
        }
    }
};
</script>

<style scoped>
    #arquetipos {       /*cambios al componente que contendran los arquetipos*/
        width: 100%;
        height: 534px;
        border: 1px solid #aaaaaa;
        overflow: scroll; /*agrega scroll al cuadro de arquetipos*/
    }
    #drag1{
        width: 100%;
    }
</style>
