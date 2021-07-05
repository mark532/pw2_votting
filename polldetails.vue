<template>
    <div class="container" style="text-align: justify;">
        <h1>Poll Detail</h1>
        <form v-for="pol in this.poll">
            <div class="form-group">
                <label for="nombreInput">Nombre:</label>
                <input type="text" class="form-control" readonly name="nombre" v-model = "pol.nombre">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="descripcionInput">Descripcion</label>
                    <input type="text" class="form-control" readonly name="descripcion" v-model='pol.descripcion'>
                </div>
                <div class="form-group col-md-3">
                    <label for="fec_initInput">Fecha Inicio</label>
                    <input type="text" class="form-control" readonly name="fecha_inicio" v-model="pol.fecha_inicio">
                </div>
                <div class="form-group col-md-3">
                    <label for="fec_finInput">fecha_final</label>
                    <input type="text" class="form-control" readonly name="fecha_final" v-model="pol.fecha_final">
                </div>
            </div>
        </form>
        <h1>Preguntas</h1>
        <form v-for="que in this.quest">
            <div class="form-group">
                <label for="nombreInput">Descripcion:</label>
                <input type="text" class="form-control" readonly name="nombre" v-model = "que.desc">
            </div>
        </form>
        <h1>Opciones</h1>
        <table class="table table-sm text-center">
            <thead>
                <tr>
                    <th scope="col">Opcion</th>
                    <th scope="col">Cantidad de votos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="opt in this.op">                       
                    <td>{{opt.desc}}</td>
                    <td>{{opt.cant}}</td>
                </tr>
                                    
            </tbody>
        </table>
    </div>
</template>

<script>
module.exports = {
    props:['title'],
    data:function () {
        return {
            poll:[],
            quest:[],
            opc:0,
            op:[]
        }
    },
    created () {
        this.getPoll(app.$route.params.id),
        this.getPregunta(app.$route.params.id)
    },
    methods: {
        getPoll(id){
            fetch('http://pw2-vottingapp.infinityfreeapp.com/server/poll/'+id,{ headers: {'Accept': 'application/json'}})
            .then((response) => response.json())
            .then((data) => {
                this.poll = data;
                console.log('Print: ' + data[0].nombre);
            })
            .catch(function (error) {
                console.log('Error f1: ' + error);
            })
        },
        getPregunta(id){
            fetch('http://pw2-vottingapp.infinityfreeapp.com/server/poll/schq/'+id,{ headers: {'Accept': 'application/json'}})
            .then((response) => response.json())
            .then((data) => {
                this.quest = data;
                this.getOpciones(data[0].id);           
            })
            .catch(function (error) {
                console.log('Print: ' + error);
            })
        },
        getOpciones(id){
            fetch('http://localhost:8080/server/poll/schopc/'+id,{ headers: {'Accept': 'application/json'}})
            .then((response) => response.json())
            .then((data) => {
                this.op = data;                
            })
            .catch(function (error) {
                console.log('Error: ' + error);
            })
        }    
    }
}

</script>