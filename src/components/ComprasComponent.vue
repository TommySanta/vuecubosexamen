<template>
    <div class="container mt-5">
        <h1 class="text-center">Compras</h1>
        <hr class="text-danger" />
        <!-- Botones -->
        <div class="d-flex justify-content-between mb-3">
            <router-link to="/perfil" class="btn btn-secondary">Volver al perfil</router-link>
            <router-link to="/pedido" class="btn btn-primary">Realizar pedido</router-link>
        </div>
        <!-- Tabla de compras -->
        <div v-if="compras.length === 0" class="text-center">
            <p>No se encontraron compras.</p>
        </div>
        <table v-else class="table table-bordered table-hover">
            <thead class="table-dark">
                <tr>
                    <th>ID Pedido</th>
                    <th>ID Cubo</th>
                    <th>Fecha de Pedido</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="compra in compras" :key="compra.idPedido">
                    <td>{{ compra.idPedido }}</td>
                    <td>{{ compra.idCubo }}</td>
                    <td>{{ new Date(compra.fechaPedido).toLocaleDateString() }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import SeriveCubos from "@/services/ServiceCubos";
const service = new SeriveCubos();

export default {
    name: "ComprasComponent",
    data() {
        return {
            compras: [],
        };
    },
    mounted() {

        service.getCompras().then((result) => {
            this.compras = result;
            console.log("Compras:", this.compras);
        });
    },
};
</script>

<style scoped>
.text-center {
    margin-top: 20px;
}
</style>