<template>
        <div class="container">
        <h1>Mis Votaciones</h1>
            <div class="table-responsive">
                <table class="table table-bordered " style="width:100%;">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Final</th>
                            <th>Hash</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='pol in this.polls'>
                            <td>{{pol.nombre}}</td>
                            <td>{{pol.descripcion}}</td>
                            <td>{{pol.fecha_inicio}}</td>
                            <td>{{pol.fecha_final}}</td>
                            <td>{{pol.hash}}</td>
                            <td>
                                <router-link class="button" :to="'/poll/'+pol.id"><img src="/images/font-eye.png" style="width:15px"></router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <router-link class="btn btn-primary" :to="'/poll/create'">Create</router-link>
        </div>
</template>

<script>
module.exports = {
    props:['title'],
    data:function () {
        return {
            polls:[]
        }
    },
    created () {
        this.getPolls()
    },
    methods: {
        getPolls(){
            fetch('http://pw2-vottingapp.infinityfreeapp.com/server/poll',{ headers: {'Accept': 'application/json'}})
            .then((response) => response.json())
            .then((data) => {
                this.polls = data;
            })
        }  
    }
}

</script>