import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import PaginaInterna from "@/views/PaginaInterna";
import BubbleWaffle from "@/views/PaginasIndividualesMarcas/bubble-waffle";
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
      path: "/franquicia-en-ecuador",
      name: "paginainterna",
      component: PaginaInterna,
      children:[
        {
          path: "/franquicia-en-ecuador/:estado",
          name: "estados",
          component: PaginaInterna,
        },
        {
          path: "/franquicia-en-ecuador/:directorio",
          name: "directorios",
          component: PaginaInterna,
        },
        {
          path: "/franquicia-en-ecuador/:categoria/:ubicacion/:inversion",
          name: "tresfiltros",
          component: PaginaInterna,
        },
        {
          path: "/franquicia-en-ecuador/:categoria/:ubicacion",
          name: "categoriayubicacion",
          component: PaginaInterna,
        },
        {
          path: "/franquicia-en-ecuador/:categoria/:inversion",
          name: "categoriayinversion",
          component: PaginaInterna,
        },
        {
          path: "/franquicia-en-ecuador/:ubicacion/:inversion",
          name: "ubicacionyinversion",
          component: PaginaInterna,
        },
        {
          path: "/franquicia-en-ecuador/:categoria",
          name: "categorias",
          component: PaginaInterna,
        },
        {
          path: "/franquicia-en-ecuador/:ubicacion",
          name: "ubicaciones",
          component: PaginaInterna,
        },
        {
          path: "/franquicia-en-ecuador/:inversion",
          name: "inversiones",
          component: PaginaInterna,
        },

        // {
        //   path: "/buscar/:categoria",
        //   name: "categorias",
        //   component: PaginaInterna,
        // },
        // {
        //   path: "/buscar/:ubicacion",
        //   name: "ubicaciones",
        //   component: PaginaInterna,
        // },
      ]
    },
    {
      path: "/marcas/bubble-waffle",
      name: "bubble waffle",
      component: BubbleWaffle,
    },
  ],
  mode: "history",
});
