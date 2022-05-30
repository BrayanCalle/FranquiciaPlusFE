<template>
  <!-- Inicio Sección Oportunidades de nuevo negocio -->
  <section class="vh-auto oportunidades-negocio">
    <div class="container">
      <div class="row oportunidadesnuevas-row mb-4">
        <div class="col-md-8 offset-md-2 text-center mt-5">
          <p class="titulo-section mb-3">Oportunidades nuevas de negocio</p>
          <p class="tipo-letra">
            Sé el primero en soñar y aprovecha los beneficios de negocios
            rentables
          </p>
        </div>
      </div>

      <!--  -->
      <div class="row oportunidadesposts-row oportunidades-posts mt-5 mb-5">
        <marca-nueva
          v-for="marca in marcasnuevas"
          v-bind:key="marca.id"
          v-bind:marca="marca"
        />

        <!-- Fin ultimo cuadro -->
      </div>
    </div>
        <div class="container-btn-buscarmascategorias">
          <a href="#cajabotones">
            <button
              class="btn colorfondo-principal btn-massegmentos mt-4 mb-5"
              type="button"
            >
              Buscar mas categorías
            </button>
          </a>
        </div>
  </section>
  <!-- Fin Sección Oportunidades de nuevo negocio -->
</template>

<script>
import MarcaNueva from "@/components/Marca/MarcaNueva";
import axios from "axios";
export default {
  components: {
    MarcaNueva,
  },
  data() {
    return {
      marcasnuevas: [],
    };
  },
  created() {
    this.getMarcasNueva();
  },
  methods: {
    getMarcasNueva() {
      axios
        .get("http://127.0.0.1:8000/api/v1/marcas/?estado__nombre=Nuevo")
        .then((response) => {
          this.marcasnuevas = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>