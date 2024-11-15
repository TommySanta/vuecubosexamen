<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample03">
                <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link"> Home </router-link>
                    </li>

                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="marca in marcas" :key="marca">
                                <router-link class="dropdown-item" :to="'/marcas/' + marca">{{ marca }}</router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            Seguridad
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" :to="'/login'">Login</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" :to="'/register'">Registro</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import Global from '@/Global';
import SeriveCubos from "@/services/ServiceCubos";
const service = new SeriveCubos();

export default {
    name: "MenuComponent",

    data() {
        return {
            marcas: [],
            selectedOption: 'login',
        };
    },

    mounted() {
        service.getMarcas().then(result => {
            this.marcas = result;
        });
        this.token= Global.token;
    },
};
</script>