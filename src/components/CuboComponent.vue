<template>
    <div>
        <!-- Mostrar el gif de loading mientras los datos no estén cargados -->
        <div v-if="!cubo" class="text-center">
            <img src="@/assets/images/Loading.gif" alt="Cargando..." />
        </div>

        <!-- Mostrar los detalles del cubo cuando los datos estén cargados -->
        <div v-else>
            <h1>{{ cubo.nombre }}</h1>
            <hr style="color: red;" />

            <!-- Tarjeta con detalles del cubo -->
            <div class="card mx-auto" style="max-width: 600px;">
                <img :src="cubo.imagen" class="card-img-top" :alt="`Imagen de ${cubo.nombre}`" />
                <div class="card-body">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th scope="row">Marca</th>
                                <td>{{ cubo.marca }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Valoración</th>
                                <td>{{ cubo.valoracion }} / 5</td>
                            </tr>
                            <tr>
                                <th scope="row">Precio</th>
                                <td>${{ cubo.precio }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn btn-primary">
                        <router-link class="dropdown-item" :to="'/'">Volver</router-link>
                    </button>
                </div>
            </div>

            <!-- Sección de comentarios -->
            <div v-if="comentarios && comentarios.length > 0">
                <h1>Comentarios</h1>
                <hr style="color: red;" />
                <table class="table">
                    <thead>
                    </thead>
                    <tbody>
                        <tr v-for="comentario in comentarios" :key="comentario.idComentario">
                            <td> Usuario {{ comentario.idUsuario }}</td>
                            <td>{{ comentario.comentario }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Mensaje si no hay comentarios -->
            <div v-else>
                <p>No hay comentarios para este cubo.</p>
            </div>
        </div>
    </div>
</template>

<script>
import SeriveCubos from "@/services/ServiceCubos";
const service = new SeriveCubos();

export default {
    name: "CuboComponent",
    data() {
        return {
            cubo: null, // Detalles del cubo
            comentarios: null, // Lista de comentarios
        };
    },
    mounted() {
        const id = this.$route.params.id; // Obtener el ID del cubo desde la ruta

        // Obtener detalles del cubo
        service.getCubo(id).then((result) => {
            this.cubo = result;
            console.log("Cubo:", this.cubo);
        });

        // Obtener comentarios del cubo
        service.getComentarios(id).then((result) => {
            this.comentarios = result;
            console.log("Comentarios:", this.comentarios);
        });
    },
};
</script>

<style scoped>
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
}

.card img {
    height: 600px;
    object-fit: cover;
}

/* Estilo para la tabla */
.table {
    margin-top: 20px;
}
</style>