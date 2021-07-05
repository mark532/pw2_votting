<template>
    <div class="container">
        <div v-if="this.er">
            <h3>Datos incorrectos</h3>
        </div>
        <div class="row justify-content-md-center">
            <div class="col-md-offset-5 col-md-3">
                <div class="form-login ">
                    <form>
                        <h4>Bienvenido</h4>
                        <label for="username">Useranme:</label>
                        <input type="text" class="form-control"  name="username" v-model="username">
                        </br>
                        <!--<input id="password" type="password" name="password" class="form-control" v-model="this.pass" />-->
                        <input type="password" class="form-control"  name="pass" v-model="pass">
                        </br>
                        <div class="wrapper">
                            <span class="group-btn">
                                <a class="btn btn-primary" v-on:click="getLogin()">Log In</a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props:['title'],
    data:function () {
        return {
            username:'',
            pass:'',
            user:[],
            er:''
            
        }
    },
    created () {
        
    },
    methods: {
        getLogin(){
            console.log(this.username);
            console.log(this.pass);
            fetch('http://pw2-vottingapp.infinityfreeapp.com/server/login/schp/'+this.username,{ headers: {'Accept': 'application/json'}})
            .then((response) => response.json())
            .then((data) => {
                this.user = data;
                if(this.user[0].username == this.username && this.user[0].password == this.pass){
                    this.er = false;
                    router.push('/poll');
                }else{
                    this.er = true                
                }
                
            })
            .catch(function (error) {
                console.log('Error f1: ' + error);
            })
        }
    }
}

</script>