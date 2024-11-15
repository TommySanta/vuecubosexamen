<template>
    <div class="container mt-5">
        <h1 class="text-center">Realizar pedido</h1>
        <hr style="color: red;"/>
        <form>
            <div class="mb-3">
                <label for="selectCubo" class="form-label">Elige un producto:</label>
                <select id="selectCubo" class="form-select" v-model="cuboSeleccionado">
                    <option disabled value="">Selecciona un cubo</option>
                    <option v-for="cubo in cubos" :key="cubo.idCubo" :value="cubo.idCubo">
                        {{ cubo.nombre }}
                    </option>
                </select>
            </div>
            <button type="button" class="btn btn-primary" :disabled="!cuboSeleccionado" @click="realizarPedido">
                Realizar pedido
            </button>
        </form>
    </div>
</template>

<script>
import SeriveCubos from "@/services/ServiceCubos";
const service = new SeriveCubos();

export default {
    name: "RealizarPedidoComponent",
    data() {
        return {
            cubos: [],
            cuboSeleccionado: "",
        };
    },
    mounted() {
        service.getCubos().then((result) => {
            this.cubos = result;
            console.log(this.cubos);
        });
    },
    methods: {
        realizarPedido() {
            if (this.cuboSeleccionado) {
                console.log(this.cuboSeleccionado)
                service.realizarPedido(this.cuboSeleccionado).then((result) => {
                    console.log(result)
                    this.$router.push("/compras");
                });
            }
        },
    },
};
</script>

<style scoped>
.text-center {
    margin-top: 20px;
}
</style>