<template>
<div class="container">
        <div class='container'>
            <h1>Participar</h1>
        </div>
        <div class='container'>
            <form class="form">
                <div class="form-row d-flex">
                    <div class="form-group col-md-6">
                        <label for="descripcionInput">Clave/Hash: </label>
                        <input type="text" class="form-control" name="busqueda" v-model="busq">
                    </div>
                    <a class="btn btn-primary" v-on:click="getPoll(busq)">Buscar</a>
                </div>
            </form>
        </div>
        <div class = "container">
            <h1>Encuenta</h1>
            <form>
                <div class="form-row">
                    <div class="form-group col-sm-12">
                        <label for="nombreInput">Nombre:</label>
                        <input type="text" class="form-control" name="nombre" v-model="this.poll">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-sm-12">
                        <label for="creatorInput">Pregunta</label>
                        <input type="text" class="form-control" name="pregunta" v-model="this.quest" >
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="authorInput">Opcion:</label>
                        <select class="form-control" name="opc">
                            <option v-for="op in opc" v-bind:value="op.id">{{ op.desc }}</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
</div>
</template>

<script>
module.exports = {
    props:['title'],
    data:function () {
        return {
            busq:'',
            idpoll:0,
            poll:'',
            idquest:0,
            quest:'',
            opc:[],
            idopc1:0,
            opc1:'',
            idopc2:0,
            opc2:''
        }
    },
    created () {
        
    },
    methods: {
        getPoll(id){
            fetch('http://pw2-vottingapp.infinityfreeapp.com/server/poll/schp/'+id,{ headers: {'Accept': 'application/json'}})
            .then((response) => response.json())
            .then((data) => {
                this.idpoll = data[0].id;
                this.poll = data[0].nombre;
                this.getPregunta(data[0].id);
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
                this.idquest = data[0].id;
                this.quest = data[0].desc;
                this.getOpciones(data[0].id);           
            })
            .catch(function (error) {
                console.log('Print: ' + error);
            })
        },
        getOpciones(id){
            fetch('http://pw2-vottingapp.infinityfreeapp.com/server/poll/schopc/'+id,{ headers: {'Accept': 'application/json'}})
            .then((response) => response.json())
            .then((data) => {
                /*this.idopc1 = data[0].id;
                this.opc1 = data[0].desc;
                this.idopc2 = data[1].id;
                this.opc2 = data[1].desc;*/
                this.opc = data;              
            })
            .catch(function (error) {
                console.log('Error: ' + error);
            })
        }
    }
}

</script>