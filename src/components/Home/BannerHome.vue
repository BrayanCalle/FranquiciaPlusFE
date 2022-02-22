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
                  v-model="ubicacionelegida"
                  name="city"
                  id="city"
                  class="form-select cuadros desplegable"
                >
                  <option value="" disabled selected>Ubicación</option>
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
                  v-model="categoriaelegida"
                  name="categorias"
                  id="categorias"
                  class="form-select cuadros desplegable"
                >
                  <option value="" disabled selected>Categorías</option>
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
                  v-model="inversionelegida"
                  name="inversiones"
                  id="inversiones"
                  class="form-select cuadros desplegable"
                >
                  <option value="" disabled selected>Inversión</option>
                  <option
                    v-for="inv in inversion"
                    :key="inv.id"
                    :value="inv.id"
                  >
                    {{ inv.nombre }}
                  </option>
                </select>
              </div>

              <a>
                <button
                  @click="filtrobuscar"
                  type="submit"
                  class="boton mt-2 mt-sm-0"
                >
                  Buscar
                </button>
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
      inversion: [],
      ubicacionelegida: "",
      categoriaelegida: "",
      inversionelegida: "",
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
    getInversion() {
      const path = "http://127.0.0.1:8000/api/v1/inversion/";
      axios
        .get(path)
        .then((response) => {
          this.inversion = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    filtrobuscar() {
      let categoriaelegida1 = this.categoriaelegida;
      let ubicacionelegida1 = this.ubicacionelegida;
      let inversionelegida1 = this.inversionelegida;
      // let inversionelegida1 = this.inversionelegida;
      // http://localhost:8080/buscar/3/?ubicacion=2/?inversion=9000
      // alert ("/buscar/"+ categoriaelegida1 + '?&ubicacion=' + ubicacionelegida1)

      // Solo se eligigio categoria y el resto no
      if (
        categoriaelegida1 != "" &&
        ubicacionelegida1 == "" &&
        inversionelegida1 == ""
      ) {
        window.location.href = "/buscar/" + categoriaelegida1;
      }
      // Solo se eligio ubicacion y el resto no
      else if (
        ubicacionelegida1 != "" &&
        categoriaelegida1 == "" &&
        inversionelegida1 == ""
      ) {
        window.location.href = "/buscar" + "?ubicacion=" + ubicacionelegida1;
      }
      // solo se eligio inversion y el resto no
      else if (
        inversionelegida1 != "" &&
        ubicacionelegida1 == "" &&
        categoriaelegida1 == ""
      ) {
        window.location.href = "/buscar/" + "&inversion=" + inversionelegida1;
      }
      // se elgio categoria y ubicacion pero no se eligio inversion
      else if (
        categoriaelegida1 != "" &&
        ubicacionelegida1 != "" &&
        inversionelegida1 == ""
      ) {
        window.location.href =
          "/buscar/" + categoriaelegida1 + "?&ubicacion=" + ubicacionelegida1;
      }
      // se eligio categoria y inversion pero no se eligio ubicacion
      else if (
        categoriaelegida1 != "" &&
        inversionelegida1 != "" &&
        ubicacionelegida1 == ""
      ) {
        window.location.href =
          "/buscar/" + categoriaelegida1 + "?&inversion=" + inversionelegida1;
      }
      // se eligio ubicacion y inversion pero no categoria
      else if (
        categoriaelegida1 == "" &&
        ubicacionelegida1 != "" &&
        inversionelegida1 != ""
      ) {
        window.location.href =
          "/buscar/" + "?&ubicacion=" + ubicacionelegida1 + "?&inversion=" + inversionelegida1;
      }
      // se eligieron Todas
      else if (
        categoriaelegida1 != "" &&
        inversionelegida1 != "" &&
        ubicacionelegida1 != ""
      ) {
        window.location.href =
          "/buscar/" + categoriaelegida1 + "?&ubicacion=" + ubicacionelegida1 + "&inversion=" + inversionelegida1;
      } else window.location.href = "/buscar/";
    },
  },
  created() {
    this.getUbicacion();
    this.getCategoria();
    this.getInversion();
  },
};
</script>

<style lang="css" scoped></style>
