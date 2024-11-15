<template>
    <div v-if="!cubos" class="text-center">
            <img src="@/assets/images/Loading.gif" alt="Cargando..." />
    </div>
    <div v-else>
        <h1>Cubos de la marca {{ marca }}</h1>
        <hr style="color: red;" />
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

<script>
import SeriveCubos from "@/services/ServiceCubos";
const service = new SeriveCubos();
export default {
    name: "CubosComponent",
    data() {
        return {
            cubos: null,
            marca: ""
        };
    },
    mounted() {
        this.marca = this.$route.params.marca;

        service.getCubosMarca(this.marca).then((result) => {
            this.cubos = result;
            console.log("Cubos:", this.cubos);
        });
    },
    watch: {
        "$route.params.marca"(nextVal, oldVal) {
            if (nextVal != oldVal) {
                this.marca = this.$route.params.marca;
                service.getCubosMarca(this.marca).then((result) => {
                    this.cubos = result;
                    console.log("Cubos:", this.cubos);
                });
            }
        },
    }
}
</script>

<style scoped></style>