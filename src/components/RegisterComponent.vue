<template>
    <div>
        <h1>Registrar Usuario</h1>
        <form v-on:submit.prevent="registrarUsuario()" style="width: 500px; margin: 0 auto">

            <label>Nombre</label>
            <input type="text" v-model="user.nombre" name="cajanombre" class="form-control" />

            <label>Email</label>
            <input type="email" v-model="user.email" name="cajaemail" class="form-control" />

            <label>Password</label>
            <input type="password" v-model="user.pass" name="cajapassword" class="form-control" /><br />

            <button class="btn btn-outline-info">Registrar</button>
        </form>
    </div>
</template>

<script>
import SeriveCubos from "@/services/ServiceCubos";
const service = new SeriveCubos();

export default {
    name: "RegisterComponent",

    data() {
        return {
            user: {
                idUsuario: 0,
                nombre: "",
                email: "",
                pass: ""
            },
        };
    },

    methods: {
        registrarUsuario() {
            service.register(this.user).then((response) => {
                console.log("Usuario registrado:", response.data);

                this.$emit("register-success");

                this.$router.push("/login");
            }).catch(error => {
                console.error("Error al registrar usuario:", error);
            });
        },
    },
};
</script>

<style scoped>
.text-center {
    margin-top: 20px;
}
</style>