<template>
<div class="container">
        <div class='container'>
            <h1>Busqueda de Votaciones</h1>
        </div>
        <div class='container'>
            <form class="form">
                <div class="form-row d-flex">
                    <div class="form-group col-md-6">
                        <label for="descripcionInput">Busqueda: </label>
                        <input type="text" class="form-control" name="busqueda" v-model="busq">
                    </div>
                    <a class="btn btn-primary" v-on:click="getCoincidencias(busq)">Buscar</a>
                </div>
                
            </form>
        </div>
        <div class = "container">
            <table class="table table-sm table-responsive">
                <h1>Coincidencias</h1>
                <thead>
                    <tr >
                        <th scope="col">Nombre</th>
                        <th scope="col">Hash</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="pol in this.polls">
                        <td>{{pol.nombre}}</td>
                        <td>{{pol.hash}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
</div>
</template>

<script>
module.exports = {
    props:['title'],
    data:function () {
        return {
            polls:[{'usercreator_id':'','nombre':'','descripcion':'','fecha_inicio':'','fecha_final':'','hash':''}],
            busq:''
        }
    },
    created () {
        
    },
    methods: {
        getCoincidencias(id){
            fetch('http://pw2-vottingapp.infinityfreeapp.com/server/busqueda/schB/'+this.busq,{ headers: {'Accept': 'application/json'}})
            .then((response) => response.json())
            .then((data) => {
                this.polls = data;
                console.log('Print: ' + data[0].nombre);
            })
            .catch(function (error) {
                console.log('Error f1: ' + error);
            })
        }
    }
}

</script>