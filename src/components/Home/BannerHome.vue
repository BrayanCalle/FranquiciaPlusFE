<template>
  <section class="hero-area-two banner" id="cajabotones">
    <!-- hero two area start -->
    <div class="container mt-1 contenedor" id="banner-principal">
      <div class="row row-banner">
        <div class="texto-banner">
          <div class="hero-two-content ptb--100">
            <h2 class="titulo-banner" data-aos="fade-right">
              Encuentra Franquicias<br />
              y Representaciones
            </h2>
            <p
              class="subtitulo-banner"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              desde $9.000 en todo LATAM
            </p>
          </div>
        </div>
        <!-- <div class="container-portada-index"> -->
        <picture class="container-portada-index">
          <source
            srcset="../../assets/img/webp/portada.webp"
            type="image/webp"
          />
          <img src="../../assets/img/portada.png" alt="" />
        </picture>
        <!-- </div> -->
      </div>
    </div>

    <!-- <div class="sidebar-box">
                <select class="styled-select"> -->
    <div class="container-cajabotones">
      <div class="caja-botones">
        <div class="centrar-cuadros">
          <div class="row">
            <div class="container-cuadros-menu">
              <div class="sidebar-box">
                <select
                  name="city"
                  id="city"
                  class="form-select cuadros desplegable"
                >
                  <option value disabled selected>Ubicación</option>
                  <option
                    v-for="ubi in ubicacion"
                    :key="ubi.id"
                    :value="ubi.nombre"
                  >
                    {{ ubi.nombre }}
                  </option>
                </select>
              </div>
              <div class="sidebar-box">
                <select
                  name="categorias"
                  id="categorias"
                  class="form-select cuadros desplegable"
                >
                  <option value disabled selected>Categorías</option>
                  <option
                    v-for="cat in categoria"
                    :key="cat.id"
                    :value="cat.nombre"
                  >
                    {{ cat.nombre }}
                  </option>
                </select>
              </div>

              <div class="sidebar-box">
                <select
                  name="inversion"
                  id="inversion"
                  class="form-select cuadros desplegable"
                >
                  <option value disabled selected>Inversión</option>
                  <option value="9000 ">$9.000 a $15.000</option>
                  <option value="15000">$15.000 a $25.000</option>
                  <option value="25000">$25.000 a $50.000</option>
                  <option value="50000">+ de $50.000</option>
                </select>
              </div>
              <a href="/buscar">
                <button type="button" class="boton mt-2 mt-sm-0">Buscar</button>
              </a>
            </div>
            <div class="contenedor-boton">
              <a href="/buscar">
                <button type="button" class="boton-xs mt-2 mt-lg-0">
                  Buscar
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Fin Sección contenido principal de la página -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ubicacion: [],
      categoria: [],
    };
  },
  methods: {
    getUbicacion() {
      const path = "http://127.0.0.1:8000/api/v1/ubicacion/";
      axios
        .get(path)
        .then((response) => {
          this.ubicacion = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
  },
  created() {
    this.getUbicacion();
    this.getCategoria();
  },
};
</script>



<style lang="css" scoped></style>
