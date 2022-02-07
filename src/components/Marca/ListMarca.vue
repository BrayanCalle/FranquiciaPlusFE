<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div class="col-md-9 contenido-cuadros mx-auto ms-2 ms-xs-2 ms-sm-0">
          <div class="row">
            <!-- Primer Cuadro -->
            <div class="d-inline-block mb-5 col-6 col-lg-4">
              <div
                v-for="marca in marcas"
                :key="marca.id"
                class="card h-100 contenedor-marcas"
              >
                <div v-if="hover">
                  <img
                    v-bind:src="marca.imagenlocal"
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                    class="card-img-top"
                    :alt="marca.nombre"
                  />
                </div>
                <div v-else>
                  <img
                    v-bind:src="marca.imagenmarca"
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="imagen-circulo">
                  <img v-bind:src="marca.imagenlogo" alt="" />
                </div>
                <div class="card-body">
                  <div class="col-md-12">
                    <h5 class="card-title titulo-card">{{ marca.nombre }}</h5>
                  </div>
                  <div class="col-8 col-md-7 pb-3 estrellas d-inline-block">
                    <p>
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />
                      <font-awesome-icon icon="star" />
                    </p>
                  </div>
                  <div class="d-inline-block pl-precio-pag1">
                    <p class="color-principal tipo-letra">
                      {{ marca.precio }}$
                    </p>
                  </div>
                  <p class="card-text color-parrafos tipo-letra cuerpo-card">
                    {{ marca.descripcion }}
                  </p>
                </div>
                <div class="card-terminacion">
                  <div class="col-7 d-inline-block color-parrafos tipo-letra">
                    <i class="fas fa-tshirt color-principal"></i>
                    <small>{{ marca.categoria }}</small>
                  </div>
                  <div class="col-4 d-inline-block ps-2 ps-sm-4">
                    <a :href="marca.nombre">
                      <button
                        type="button"
                        class="btn-consultar colorfondo-principal"
                      >
                        Consultar
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Fin Primer Cuadro -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      hover: false,
      fields: [
        { key: "title", label: "Título" },
        { key: "description", label: "Descripción" },
        { key: "action", label: "Acción" },
      ],
      categoria: [],
      marcas: [],
    };
  },
  methods: {
    getCategoria() {
      const path = "http://127.0.0.1:8000/api/v1/categoria/";
      axios
        .get(path)
        .then((response) => {
          this.categoria = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMarcas() {
      const path2 = "http://127.0.0.1:8000/api/v1/marcas/";
      axios
        .get(path2)
        .then((response) => {
          this.marcas = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getCategoria(), this.getMarcas();
  },
};
</script>

<style lang="css" scoped>
@import "../../assets/css/styles.css";
/* @import '../../assets/plugins/fontawesome.js'; */
</style>
