import axios from "axios";
import Global from "@/Global";

export default class SeriveCubos {

    login(user) {
        return new Promise(function (resolve) {
            let request = "/api/Manage/Login";
            let url = Global.urlApiCubos + request;
            axios.post(url, user,{ headers: { "Content-Type": "application/json"  } }).then((response) => {
                resolve(response);
            })
        })
    }
    register(user){
        return new Promise(function (resolve) {
            let request = "/api/Manage/RegistroUsuario";
            let url = Global.urlApiCubos + request;
            let token = Global.token;
            axios.post(url, user,{ headers: { Authorization: "bearer " + token, "Content-Type": "application/json"  } }).then((response) => {
                resolve(response);
            })
        })

    }

    getMarcas() {
        return new Promise(function (resolve) {
            let marcas = [];
            let request = "api/Cubos/Marcas";
            let url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo Marcas");
                marcas = response.data;
                resolve(marcas);
            })
        })
    }
    getCubos() {
        return new Promise(function (resolve) {
            let cubos = [];
            let request = "api/Cubos";
            let url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo Cubos");
                cubos = response.data;
                resolve(cubos);
            })
        })
    }
    getCubo(id) {
        return new Promise(function (resolve) {
            let cubo = [];
            let request = "api/Cubos/"+id;
            let url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo Cubo");
                cubo = response.data;
                resolve(cubo);
            })
        })
    }
    getCubosMarca(marca) {
        return new Promise(function (resolve) {
            let cubos = [];
            let request = "api/Cubos/CubosMarca/"+marca;
            let url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo Cubos de la marca: "+marca);
                cubos = response.data;
                resolve(cubos);
            })
        })
    }
    getComentarios(id) {
        return new Promise(function (resolve) {
            let comentarios = [];
            let request = "api/ComentariosCubo/GetComentariosCubo/"+id;
            let url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo Comentarios");
                comentarios = response.data;
                resolve(comentarios);
            })
        })
    }

    getPerfilUsuario() {
        return new Promise(function(resolve) {
            let request = "/api/Manage/PerfilUsuario";
            let url = Global.urlApiCubos + request;
            let token = Global.token;
            console.log(token);
            axios.get(url, { headers: { Authorization: "bearer " + token } }).then(response => {
                console.log("Obteniendo el perfil del usuario")
                resolve(response.data);
            })
        })
    }

    getCompras() {
        return new Promise(function(resolve) {
            let request = "/api/Compra/ComprasUsuario";
            let url = Global.urlApiCubos + request;
            let token = Global.token;
            console.log(token);
            axios.get(url, { headers: { Authorization: "bearer " + token } }).then(response => {
                console.log("Obteniendo las compras del usuario")
                resolve(response.data);
            })
        })
    }
    realizarPedido(idCubo) {
        return new Promise(function(resolve) {
            let request = "/api/Compra/InsertarPedido/"+idCubo;
            let url = Global.urlApiCubos + request;
            let token = Global.token;

            axios.post(url, idCubo, { headers: { Authorization: "bearer " + token } }).then(response => {
                console.log("Insertando un nuevo producto");
                resolve(response)
            })
        })
    }


}

