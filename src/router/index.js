import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import PaginaInterna from "@/views/PaginaInterna";

// import ListMarca from "@/components/Marca/ListMarca";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/buscar",
      name: "paginainterna",
      component: PaginaInterna,
    },
  ],
  mode: "history",
});
