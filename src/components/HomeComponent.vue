<template>
    <div>
        <h1>Bienvenido</h1>
        <hr style="color: red;"/>
        <div class="row">
            <div class="col-md-4" v-for="cubo in cubos" :key="cubo.idCubo">
                <div class="card my-3">
                    <img :src="cubo.imagen" class="card-img-top" :alt="`Imagen de ${cubo.nombre}`" />
                    <div class="card-body">
                        <h5 class="card-title">{{ cubo.nombre }}</h5>
                        <p class="card-text">Precio: ${{ cubo.precio }}</p>
                        <button class="btn btn-primary">
                            <router-link class="dropdown-item" :to="'/cubo/' + cubo.idCubo">Detalle</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- // @click="detalleCubo(cubo) -->
<script>
import SeriveCubos from '@/services/ServiceCubos';
const service = new SeriveCubos();
export default {
    name: "HomeComponent",
    data() {
        return {
            cubos: [],
        }
    },

    mounted() {
        service.getCubos().then(result => {
            this.cubos = result;
            console.log(this.cubos)
        })
    }
}
</script>