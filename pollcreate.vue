<template>
    <div class="container" style="text-align: justify;">
        <h1>Poll Detail</h1>
        <form v-for="pol in this.poll">
            <div class="form-group">
                <label for="nombreInput">Nombre:</label>
                <input type="text" class="form-control"  name="nombre" v-model = "pol.nombre">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="descripcionInput">Descripcion</label>
                    <input type="text" class="form-control"  name="descripcion" v-model='pol.descripcion'>
                </div>
                <div class="form-group col-md-3">
                    <label for="fec_initInput">Fecha Inicio</label>
                    <input type="text" class="form-control"  name="fecha_inicio" v-model="pol.fecha_inicio">
                </div>
                <div class="form-group col-md-3">
                    <label for="fec_finInput">fecha_final</label>
                    <input type="text" class="form-control"  name="fecha_final" v-model="pol.fecha_final">
                </div>
            </div>
        </form>
        <h1>Preguntas</h1>
        <form v-for="que in this.quest">
            <div class="form-group">
                <label for="nombreInput">Descripcion:</label>
                <input type="text" class="form-control"  name="nombre" v-model = "que.desc">
            </div>
        </form>
        <h1>Opciones</h1>
        <form v-for="opt in this.op">
            <div class="form-group">
                <label for="nombreInput">Opcion 1:</label>
                <input type="text" class="form-control"  name="opc1" v-model = "opt.desc">
            </div>
            <div class="form-group">
                <label for="nombreInput">Opcion 2:</label>
                <input type="text" class="form-control"  name="opc2" v-model = "opt.desc">
            </div>
        </form>
        <a class="btn btn-primary" v-on:click="createQuestion()">Create</a>
    </div>
</template>

<script>
module.exports = {
    props:['title'],
    data:function () {
        return {
            poll:[{'usercreator_id':'','nombre':'','descripcion':'','fecha_inicio':'','fecha_final':'','hash':''}],
            quest:[{'poll_id':'','desc':''}],
            opc:0,
            op:[{'question_id':'','desc':'','cant':''}],
            q:'aaa',
            articl:0
        }
    },
    created () {
        
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
        createQuestion(){
            //console.log(this.quest);
            //console.log(JSON.stringify({ title: "Vue POST Request Example" }));
            fetch('http://pw2-vottingapp.infinityfreeapp.com/server/question',
                { headers: {'Accept': 'application/json'},
                  method: 'POST',
                  mode: 'no-cors',
                  body: {'poll_id':'','title':'phola2'}
                })
            .then((data) => {
                console.log('Print1: ' + this.quest[0]);
                console.log('Print2: ' + this.quest[0].desc);
                //router.push('/poll');
            }) 
            // console.log('Print: ' + this.quest[0].desc);
        }  
    }
}

</script>
