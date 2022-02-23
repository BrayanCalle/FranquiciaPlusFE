<template>
  <main>
    <banner-pagina-interna-1 />

    <section class="sector vh-auto">
      <div class="row mb-5 w-100">
        <!--  -->
        <div class="container-menu-filtrar mb-2">
          <div class="col-12 col-md-12 navbar-light menu-container-filtro">
            <div class="container-fluid">
              <button
                class="navbar-toggler btn-menu"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleFilter"
                aria-controls="navbarToggleFilter"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <!-- <i class="fas fa-bars"></i> -->
                <div class="container-filter-icon">
                  <img src="assets/img/filtrar.png" alt="" />
                  <div>
                    <p>Filtrar</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <!-- Contenido -->
          <div class="collapse container-menu-filtro" id="navbarToggleFilter">
            <div class="bg-white ms-auto content-menu-filtro">
              <div class="contenido-menu">
                <!--  -->
                <div class="col-md-3 pe-0 filtrado">
                  <p class="filtrado-multiple-titulos">Buscar otro sector</p>

                  <div class="accordion" id="accordionPanelsStayOpenExample">
                    <!-- Acordion item 1 -->
                    <div class="accordion-item mt-2 mb-2 unidad-acordeon">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          Categoría
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>Restaurantes</li>
                            <li>Agencias de Viajes</li>
                            <li>Agencias Inmobiliarias</li>
                            <li>Asesoría y Consultoría</li>
                            <li>Automotriz</li>
                            <li>Belleza</li>
                            <li>Restaurantes</li>
                            <li>Deportes</li>
                            <li>Distribución y Venta</li>
                            <li>Enseñanza y Formación</li>
                            <li>Infantiles</li>
                            <li>Hogar y Decoración</li>
                            <li>Hotelería</li>
                            <li>Informática e Internet</li>
                            <li>Marketing y Publicidad</li>
                            <li>Mensajería y Transporte</li>
                            <li>Moda</li>
                            <li>Ocio y Tiempo Libre</li>
                            <li>Papelería</li>
                            <li>Salud y Bienestar</li>
                            <li>Seguridad</li>
                            <li>Servicios de Limpieza</li>
                            <li>Servicios Especializados</li>
                            <li>Telecomunicaciones y Telefonía</li>
                            <li>Tiendas Especializadas</li>
                            <li>Lavanderías y Tintorerías</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- Acordion item 2 -->
                    <div class="accordion-item mt-2 mb-2 unidad-acordeon">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          Ubicación
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>Pichincha</li>
                            <li>Azuay</li>
                            <li>Bolívar</li>
                            <li>Cañar</li>
                            <li>Carchi</li>
                            <li>Chimborazo</li>
                            <li>Cotopaxi</li>
                            <li>El Oro</li>
                            <li>Esmeraldas</li>
                            <li>Galápagos</li>
                            <li>Guayas</li>
                            <li>Imbabura</li>
                            <li>Napo</li>
                            <li>Orellana</li>
                            <li>Pastaza</li>
                            <li>Quito</li>
                            <li>Sucumbíos</li>
                            <li>Tungurahua</li>
                            <li>Zamora Chinchipe</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <p class="filtrado-multiple-titulos">Filtrar por:</p>
                    <!-- Acordion item 3 -->
                    <div class="accordion-item mt-2 mb-2 unidad-acordeon">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          Todas
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>Más Vendidas</li>
                            <li>Nuevas Franquicias</li>
                            <li>En promoción</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <!-- Acordion item 4 -->
                    <div class="accordion-item mt-2 mb-2 unidad-acordeon">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingCuatro"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseCuatro"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseCuatro"
                        >
                          $9.000 a $15.000
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseCuatro"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingCuatro"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>$9.000 a $15.000</li>
                            <li>$15.000 a $25.000</li>
                            <li>$25.000 a $50.000</li>
                            <li>+ de $50.000</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  -->

        <!-- ===================== Inicio Izquierda ======================== -->
        <div class="col-md-3 pe-0 filtrado-izquierda">
          <p class="filtrado-multiple-titulos">Buscar otro sector</p>
          <!-- Categorias -->
          <div class="cuadros-filtros-izquierda mt-2 mb-2">
            <select
              v-model="categoriaelegida"
              name="categorias"
              id="categorias"
              class="form-select"
            >
              <option value="" selected>Categorías</option>
              <option
                v-for="cat in categoria"
                :key="cat.id"
                :value="cat.nombre"
              >
                {{ cat.nombre }}
              </option>
            </select>
          </div>

          <!-- Ubicación -->
          <div class="cuadros-filtros-izquierda mt-2 mb-2">
            <select
              v-model="ubicacionelegida"
              name="city"
              id="city"
              class="form-select"
            >
              <option value="" selected>Ubicación</option>
              <option
                v-for="ubi in ubicacion"
                :key="ubi.id"
                :value="ubi.nombre"
              >
                {{ ubi.nombre }}
              </option>
            </select>
          </div>

          <!-- Inversion -->
          <div class="cuadros-filtros-izquierda mt-2 mb-2">
            <select
              v-model="inversionelegida"
              name="inversiones"
              id="inversiones"
              class="form-select"
            >
              <option value="" selected>Inversión</option>
              <option v-for="inv in inversion" :key="inv.id" :value="inv.id">
                {{ inv.nombre }}
              </option>
            </select>
          </div>
          <!-- Boton Filtrar -->
          <div class="contenerdor-boton-filtrar mb-1">
            <a>
              <button
                @click="filtrarMarcas"
                type="submit"
                class="boton-filtrar mt-2 mt-sm-0"
              >
                Filtrar
              </button>
            </a>
          </div>
          <!-- boton routerlink -->

          <div class="accordion" id="accordionPanelsStayOpenExample">
            <p class="filtrado-multiple-titulos">Filtrar por:</p>
            <!-- Acordion item 3 -->
            <div class="accordion-item mt-2 mb-2 unidad-acordeon">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Todas
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  <ul>
                    <li
                      v-for="estad in estado"
                      :key="estad.id"
                      :value="estad.nombre"
                    >
                      <router-link
                        :to="{
                          name: 'estados',
                          params: { estado: estad.nombre },
                        }"
                      >
                        {{ estad.nombre }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Directorio -->
            <div class="mt-3 pb-5 directorio">
              <p>Directorio</p>
              <div class="container-directorios">
                <div
                  class="
                    container-directorio
                    col-12
                    text-center
                    wow
                    animate__fadeIn
                  "
                  data-wow-delay="0.2s"
                >
                  <ul
                    class="
                      portfolio-filter
                      grid-filter
                      nav nav-tabs
                      justify-content-center
                      border-0
                      font-weight-500
                      alt-font
                      padding-5-half-rem-bottom
                      lg-padding-3-half-rem-bottom
                      sm-padding-2-rem-bottom
                    "
                  >
                    <li
                      class="nav"
                      v-for="dir in directorio"
                      :key="dir.id"
                      :value="dir.nombre"
                    >
                      <router-link
                        :to="{
                          name: 'directorios',
                          params: { directorio: dir.nombre },
                        }"
                      >
                        {{ dir.nombre }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Fin Directorio -->
            <div class="buscador-interno mt-3">
              <div class="d-flex">
                <input
                  v-model="search"
                  class="form-control"
                  type="search"
                  placeholder="Buscar Franquicia"
                  aria-label="Search"
                  v-on:keyup.enter="searchData"
                />
                <button v-on:click="searchData" class="btn" type="submit">
                  <font-awesome-icon icon="search" class="icon-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- ===================== Fin Izquierda ======================== -->
        <!-- ===================== Inicio Derecha ======================== -->
        <div class="col-md-9 contenido-cuadros mx-auto ms-2 ms-xs-2 ms-sm-0">
          <div class="row">
            <marca
              v-for="marca in marcas"
              v-bind:key="marca.id"
              v-bind:marca="marca"
            />
          </div>
        </div>
        <!-- Inicia Paginacion-->
        <div class="d-flex justify-content-end">
          <div class="col-md-9">
            <nav
              aria-label="Page navigation example"
              rol="navegation"
              id="paginacion-inter1"
            >
              <ul class="pagination">
                <li class="page-item">
                  <a
                    class="page-link"
                    aria-label="Previous"
                    v-on:click="changePage(page - 1)"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link marcado">{{ page }}</a>
                </li>
                <!-- <li class="page-item">
                    <a class="page-link">{{ page + 1 }}</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link">{{ page + 2 }}</a>
                  </li> -->
                <li class="page-item">
                  <a
                    class="page-link"
                    aria-label="Next"
                    v-on:click="changePage(page + 1)"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- Fin Paginacion-->
      </div>
    </section>
    <!-- ===================== Fin Derecha ======================== -->
    <!-- ============ Inicio sección 3 ============ -->
    <section class="section-marca-publicidad">
      
    </section>
    <!-- ============ Fin Sección 3 ============ -->
  </main>
</template>

<script>
import BannerPaginaInterna1 from "../components/PaginaInterna1/BannerPaginaInterna1.vue";
import Marca from "@/components/Marca/Marca";
import axios from "axios";
import apiMarcas from "../api";

export default {
  name: "PaginaIntena1",
  components: {
    BannerPaginaInterna1,
    Marca,
  },
  data() {
    return {
      marcas: [],
      categoria: [],
      ubicacion: [],
      inversion: [],
      estado: [],
      directorio: [],
      ubicacionelegida: "",
      categoriaelegida: "",
      inversionelegida: "",
      page: 1,
      pages: 1,
      search: "",
    };
  },
  // Watch sirve para que la pagina se recarge al cambiar la categoria en url
  watch: {
    // "$route.params.categoria": function () {
    //   this.filtrarMarcas();
    // },
    // "$route.query.ubicacion": function () {
    //   this.filtrarMarcas();
    // },
    // "$route.query.inversion": function () {
    //   this.filtrarMarcas();
    // },
    "$route.params.estado": function () {
      this.filtrarMarcasporEstado();
    },
    "$route.params.directorio": function () {
      this.filtrarMarcasporDirectorio();
    },
  },
  created() {
    this.getMarcas();
    this.getCategoria();
    this.getUbicacion();
    this.getInversion();
    this.getEstado();
    this.getDirectorio();
  },
  methods: {
    getMarcas() {
      const params = {
        page: this.page,
        search: this.search,
      };

      // const path2 = "http://127.0.0.1:8000/api/v1/marcas/" ,  {params} ;
      axios
        .get("http://127.0.0.1:8000/api/v1/marcas/", { params })
        .then((response) => {
          this.marcas = response.data.results;
          this.pages = response.data.total_pages;
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
    getEstado() {
      const path = "http://127.0.0.1:8000/api/v1/estado/";
      axios
        .get(path)
        .then((response) => {
          this.estado = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDirectorio() {
      const path = "http://127.0.0.1:8000/api/v1/directorio/";
      axios
        .get(path)
        .then((response) => {
          this.directorio = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changePage(page) {
      this.page = page <= 0 || page > this.pages ? this.page : page;
      this.getMarcas();
    },
    searchData() {
      this.page = 1;
      this.getMarcas();
    },
    filtrarMarcasporEstado(){
      axios
        .get("http://127.0.0.1:8000/api/v1/marcas/?estado__nombre=" + this.$route.params.estado)
        .then((response) => {
          console.log(response.data.results)
          this.marcas = response.data.results;
        });
    },
    filtrarMarcasporDirectorio(){
      axios
        .get("http://127.0.0.1:8000/api/v1/marcas/?directorio__nombre=" + this.$route.params.directorio)
        .then((response) => {
          console.log(response.data.results)
          this.marcas = response.data.results;
        });
    },
    filtrarMarcas() {
      let categoriaelegida1 = this.categoriaelegida;
      let ubicacionelegida1 = this.ubicacionelegida;
      let inversionelegida1 = this.inversionelegida;
      let filtros = " ";
      if (categoriaelegida1 != "") {
        filtros = "categoria__nombre=" + categoriaelegida1;
      }
      if (ubicacionelegida1 != "") {
        filtros = filtros + "&ubicacion__nombre=" + ubicacionelegida1;
      }
      if (inversionelegida1 != "") {
        filtros = filtros + "&inversion=" + inversionelegida1;
      }

      console.log(filtros);
      apiMarcas.filtrarMarcas(filtros).then((response) => {
        this.marcas = response.data.results;
      });

      // Otro metodo

      // const params = {
      //   categoria__nombre: this.$route.params.categoria,
      //   ubicacion__nombre: this.$route.params.ubicacion,
      // };

      // axios
      //   .get("http://127.0.0.1:8000/api/v1/marcas/", { params })
      //   .then((response) => {
      //     this.marcas = response.data.results;
      //   });

      // console.log(("http://127.0.0.1:8000/api/v1/marcas/",  { params1 }))

      // const params2 = {
      //   ubicacion: this.$route.params.ubicacion,
      // };

      // Otro metodo
      // axios
      //   .get("http://127.0.0.1:8000/api/v1/marcas/", { params2 })
      //   .then((response) => {
      //     this.marcas = response.data.results;
      //   });

      // let filtros = 'categoria=' + this.$route.params.categoria
      // apiMarcas.filtrarMarcas(filtros).then((response) => {
      //   this.marcas = response.data.results
      // });
    },
  },
  beforeMount() {
    // this.filtrarMarcas();
    // this.filtrarMarcasporEstado();
  },
};
</script>

<style scoped>
.accordion-item {
  border: 0;
}

.unidad-acordeon {
  width: 85%;
  box-shadow: 3px 10px 20px rgb(0 0 0 / 40%);
  border-radius: 0em 1em 1em 0em;
  -webkit-border-radius: 0em 1em 1em 0em;
  -moz-border-radius: 0em 1em 1em 0em;
  -ms-border-radius: 0em 1em 1em 0em;
  -o-border-radius: 0em 1em 1em 0em;
}

.accordion-button {
  border-radius: 1em;
  -webkit-border-radius: 1em;
  -moz-border-radius: 1em;
  -ms-border-radius: 1em;
  -o-border-radius: 1em;
}

.accordion-item:first-of-type {
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
}

.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
}

.accordion-item:last-of-type {
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
}

.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
}

/* Filtrado */
.container-directorio ul li a {
  color: #000000;
  font-family: "GT Walsheim Pro Regular";
  font-size: 1.2em;
  padding: 0 1.2em;
  text-decoration: none;
  line-height: 1.5em;
}

.container-directorio .portfolio-filter {
  display: block;
}

.filtrado-multiple-titulos {
  font-family: "GT Walsheim Pro Bold";
  font-size: 1.2em;
  line-height: 1.2em;
}

.accordion-body ul li {
  font-size: 1em;
  line-height: 1.2em;
}

.directorio {
  background-color: #ffffff;
  box-shadow: 0.4375em 1.125em 2.5em rgb(0 0 0 / 40%);
  border-radius: 0em 1em 1em 0em;
  width: 92%;
}

.directorio p {
  font-size: 1.8em;
  font-family: "GT Walsheim Pro Bold";
  line-height: 2em;
  padding: 0 0.8em;
}

.container-filter-icon {
  display: flex;
}

.container-filter-icon > img {
  width: 1.5em;
  height: 1.5em;
}

.container-filter-icon > div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-filter-icon > div > p {
  margin-left: 0.5em;
  font-family: "GT Walsheim Pro Regular";
  color: #fa5e4d;
}

#accordionPanelsStayOpenExample > div > h2 {
  font-family: "GT Walsheim Pro Regular";
}

#accordionPanelsStayOpenExample > div > h2 > button {
  background-image: url(data:image/png;base64,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);
  background-repeat: no-repeat, repeat;
  background-position: right 1.2em top 50%, 0 0;
  background-color: #ffffff;
  background-size: 1.2em auto, 100%;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 30%);
  display: inline-block;
  height: 3em;
  -webkit-appearance: none;
}

#accordionPanelsStayOpenExample > div > div > div > ul > li {
  font-family: "GT Walsheim Pro Regular";
}

#accordionPanelsStayOpenExample > div > div > div > ul > li > a {
  color: rgb(0, 0, 0);
}

#accordionPanelsStayOpenExample > div > div > div > ul > li > a:focus-within {
  color: #f44336;
}

/* paginacion inter1 */
#paginacion-inter1 {
  display: flex;
  justify-content: center;
}

#paginacion-inter1 > ul {
  font-family: "GT Walsheim Pro Regular";
}

#paginacion-inter1 > ul > li {
  background-color: transparent;
  margin: 0 0.125em;
  font-size: 1.25em;
}

#paginacion-inter1 > ul > li > a {
  border-radius: 23px;
  color: black;
}

#paginacion-inter1 > ul > li > .marcado {
  background-color: #fa5e4d;
  color: white;
}

/* Buscador Inteno */
.buscador-interno {
  width: 92%;
}

.buscador-interno {
  box-shadow: 3px 10px 20px rgb(0 0 0 / 40%);
  border-radius: 0em 0.5em 0.5em 0em;
}

.buscador-interno > form > input:focus {
  border-color: #fa5e4d;
  box-shadow: 0 0 0 0.25rem #fa5e4d17;
}

.cuadros-filtros-izquierda > select {
  background-image: url(data:image/png;base64,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);
  background-repeat: no-repeat, repeat;
  background-position: right 1.2em top 50%, 0 0;
  background-color: #ffffff;
  background-size: 1.2em auto, 100%;
  border-bottom-right-radius: 1em;
  border-top-right-radius: 1em;
  box-shadow: 3px 10px 20px rgb(0 0 0 / 40%);
  display: inline-block;
  font-family: "GT Walsheim Pro Regular";
  height: 3em;
  width: 85%;
  -webkit-appearance: none;
}

.boton-filtrar {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: white;
  text-decoration: none;
  text-align: center;
  background-color: #fa5e4d;
  width: 7em;
  height: 2.3em;
  line-height: 0.5;
  border-radius: 0.25em;
  font-family: "GT Walsheim Pro Regular";
  border: 0.0625em solid transparent;
  -webkit-border-radius: 0.6em;
  -moz-border-radius: 0.25em;
  -ms-border-radius: 0.25em;
  -o-border-radius: 0.25em;
}

.contenerdor-boton-filtrar {
  display: flex;
  justify-content: flex-end;
  width: 85%;
}

/* Media querys */
@media (max-width: 576px) {
  .filtrado-izquierda {
    display: none;
  }

  .accordion-body ul li {
    font-size: 1.2em;
  }
}

@media (min-width: 577px) {
  .container-menu-filtrar {
    display: none;
  }
}
</style>
