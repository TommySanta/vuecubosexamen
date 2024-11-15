<template>
    <div class="container mt-5">
        <h1 class="text-center">Mi perfil</h1>
        <hr class="text-danger" />
        <div class="card mx-auto" style="max-width: 600px;">
            <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center justify-content-center">
                    <img src="@/assets/images/perfil.jpg" alt="Foto de perfil"
                        class="img-fluid rounded-circle border border-secondary" style="max-width: 150px;" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="nombre" class="form-label fw-bold">Nombre</label>
                                <input type="text" id="nombre" class="form-control"
                                    :value="perfil?.nombre || 'Cargando...'" readonly />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label fw-bold">Email</label>
                                <input type="email" id="email" class="form-control"
                                    :value="perfil?.email || 'Cargando...'" readonly />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-primary">
                        <router-link class="dropdown-item" :to="'/compras'">Mostrar compras</router-link>
                    </button>
    </div>
</template>

<script>
import SeriveCubos from "@/services/ServiceCubos";
const service = new SeriveCubos();

export default {
    name: "PerfilComponent",
    data() {
        return {
            perfil: null, 
        };
    },
    mounted() {
        service.getPerfilUsuario().then((result) => {
            this.perfil = result;
            console.log("Perfil:", this.perfil);
        });
    },
};
</script>

<style scoped>
.img-fluid {
    max-height: 150px;
    object-fit: cover;
}
</style>