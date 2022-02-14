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

          <div class="accordion" id="accordionPanelsStayOpenExample">
            <!-- Acordion item 1 -->
            <div class="accordion-item mt-2 mb-2 unidad-acordeon">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
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
                    <li>
                      <a href="/buscar/"> Todos </a>
                    </li>
                    <li
                      v-for="cat in categoria"
                      :key="cat.id"
                      :value="cat.nombre"
                    >
                      <router-link
                        :to="{
                          name: 'categorias',
                          params: { categoria: cat.nombre },
                        }"
                      >
                        {{ cat.nombre }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Acordion item 2 -->
            <div class="accordion-item mt-2 mb-2 unidad-acordeon">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
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
                    <li>Todos</li>
                    <li
                      v-for="ubi in ubicacion"
                      :key="ubi.id"
                      :value="ubi.nombre"
                    >
                      <!-- <a :href="'?&ubicacion=' + ubi.id">
                        {{ ubi.nombre }}
                      </a> -->
                      <router-link
                        :to="{
                          name: 'ubicaciones',
                          params: { ubicacion: ubi.nombre },
                        }"
                      >
                        {{ ubi.nombre }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

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
                    <li>Más Vendidas</li>
                    <li>Nuevas Franquicias</li>
                    <li>En promoción</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Acordion item 4 -->
            <div class="accordion-item mt-2 mb-2 unidad-acordeon">
              <h2 class="accordion-header" id="panelsStayOpen-headingCuatro">
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
            <!-- Directorio -->
            <div class="mt-3 pb-5 directorio">
              <p>Directorio</p>
              <div class="container-directorios">
                <input
                  type="radio"
                  id="Heladerias"
                  name="categories"
                  value="Heladerias"
                  checked
                />
                <input
                  type="radio"
                  id="ComidaRapida"
                  name="categories"
                  value="ComidaRapida"
                />
                <input
                  type="radio"
                  id="Parrilladas"
                  name="categories"
                  value="Parrilladas"
                />
                <input
                  type="radio"
                  id="Postres"
                  name="categories"
                  value="Postres"
                />
                <input
                  type="radio"
                  id="Panaderias"
                  name="categories"
                  value="Panaderias"
                />
                <input
                  type="radio"
                  id="Mariscos"
                  name="categories"
                  value="Mariscos"
                />
                <input
                  type="radio"
                  id="Tradicional"
                  name="categories"
                  value="Tradicional"
                />
                <input
                  type="radio"
                  id="Internacional"
                  name="categories"
                  value="Internacional"
                />
                <input
                  type="radio"
                  id="Mediterraneo"
                  name="categories"
                  value="Mediterraneo"
                />

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
                    <li class="nav active">
                      <label class="border-0" for="Heladerias"
                        >Heladerías</label
                      >
                    </li>
                    <li class="nav">
                      <label class="border-0" for="ComidaRapida"
                        >Comida Rápida</label
                      >
                    </li>
                    <li class="nav">
                      <label class="border-0" for="Parrilladas"
                        >Parrilladas</label
                      >
                    </li>
                    <li class="nav">
                      <label class="border-0" for="Postres">Postrés</label>
                    </li>
                    <li class="nav">
                      <label class="border-0" for="Panaderias"
                        >Panaderías</label
                      >
                    </li>
                    <li class="nav">
                      <label class="border-0" for="Mariscos">Mariscos</label>
                    </li>
                    <li class="nav">
                      <label class="border-0" for="Tradicional"
                        >Tradicional</label
                      >
                    </li>
                    <li class="nav">
                      <label class="border-0" for="Internacional"
                        >Internacional</label
                      >
                    </li>
                    <li class="nav">
                      <label class="border-0" for="Mediterraneo"
                        >Mediterraneo</label
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
          <!-- Inicia Paginacion-->
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
              <li class="page-item">
                <a class="page-link">{{ page + 1 }}</a>
              </li>
              <li class="page-item">
                <a class="page-link">{{ page + 2 }}</a>
              </li>
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
          <!-- Fin Paginacion-->
        </div>
      </div>
    </section>
    <!-- ===================== Fin Derecha ======================== -->
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
      ubicacion: [],
      page: 1,
      pages: 1,
      search: "",
      categoria: [],
    };
  },
  // Watch sirve para que la pagina se recarge al cambiar la categoria en url
  watch: {
    "$route.params.categoria": function () {
      this.filtrarMarcas();
    },
    "$route.params.ubicacion": function () {
      this.filtrarMarcas();
    },
  },
  created() {
    this.getMarcas();
    this.getCategoria();
    this.getUbicacion();
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
    changePage(page) {
      this.page = page <= 0 || page > this.pages ? this.page : page;
      this.getMarcas();
    },
    searchData() {
      this.page = 1;
      this.getMarcas();
    },
    filtrarMarcas: function () {
      // let filtros = 'categoria__nombre=' + this.$route.params.categoria;
      // if (this.$route.query.ubicacion) {
      //   filtros = filtros + "&ubicacion__nombre=" + this.$route.query.ubicacion;
      // }

      // console.log(filtros);
      // apiMarcas.filtrarMarcas(filtros)
      // .then((response) => {
      //   this.marcas = response.data.results;
      // });

      // Otro metodo


      const params = {
        categoria__nombre: this.$route.params.categoria,
        ubicacion__nombre: this.$route.params.ubicacion,
      };


      axios
        .get("http://127.0.0.1:8000/api/v1/marcas/", { params })
        .then((response) => {
          this.marcas = response.data.results;
        });



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
    this.filtrarMarcas();
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
.container-directorio ul li label {
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

#accordionPanelsStayOpenExample > div > div > div > ul > li {
  font-family: "GT Walsheim Pro Regular";
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
e
