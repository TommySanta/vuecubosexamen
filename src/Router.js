import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import CuboComponent from "./components/CuboComponent.vue";
import CubosComponent from "./components/CubosComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";
import ComprasComponent from "./components/ComprasComponent.vue";
import RealizarPedidoComponent from "./components/RealizarPedidoComponent.vue";
import RegisterComponent from "./components/RegisterComponent.vue";

//CREAMOS UNA CONSTANTE ARRAY PARA LA RUTA
const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/cubo/:id", component: CuboComponent },
    { path: "/marcas/:marca", component: CubosComponent },
    { path: "/login", component: LoginComponent },
    { path: "/register", component: RegisterComponent },
    { path: "/perfil", component: PerfilComponent },
    { path: "/compras", component: ComprasComponent },
    { path: "/pedido", component: RealizarPedidoComponent },

    
]

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EN EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENRO DE Main.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//POR ULTIMO EXPORTAMOS LA CONSTANTE router PARA SER UTILIZADA EN App
export default router;