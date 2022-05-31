<template>
  <main>
    <banner-home />

    <!-- Inicio Sección Encuentra tu Franquicia -->
    <section class="my-5 pt-5">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-8 offset-md-2 text-center">
            <p
              data-aos="fade-down"
              data-aos-delay="100"
              class="titulo-section mb-3"
              data-i18n
            >
              Encuentra tu Franquicia
            </p>
            <p
              data-aos="fade-down"
              data-aos-delay="300"
              class="subtitulo-section"
            >
              Invierte en una empresa de éxito y se parte de un equipo ganador
            </p>
          </div>
        </div>
        <!-- Inicio Cajas Repetitivas -->
        <div class="row cajasrepetitiva-row justify-content-center flex-column">
          <div class="container-post">
            <input
              type="radio"
              id="Todo"
              name="categories"
              value="Todo"
              checked
            />
            <input
              type="radio"
              id="Restaurantes"
              name="categories"
              value="Restaurantes"
            />
            <input type="radio" id="Farmacias" name="categories" value="Farmacias" />
            <input
              type="radio"
              id="Supermercado"
              name="categories"
              value="Supermercado"
            />
            <input type="radio" id="PHP" name="categories" value="PHP" />
            <input type="radio" id="NODEJS" name="categories" value="NODEJS" />
            <input type="radio" id="VUE" name="categories" value="VUE" />

            <div
              class="container-category col-12 text-center wow animate__fadeIn"
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
                  container-licategory
                "
              >
                <li id="test" class="nav active activee opcion">
                  <font-awesome-icon icon="th-large" />
                  <label class="border-0" for="Todo">Todo</label>
                </li>
                <li class="nav nav-restaurante opcion">
                  <font-awesome-icon icon="utensils" />
                  <label class="border-0" for="Restaurantes">Restaurante</label>
                </li>
                <li class="nav nav-moda mb-2 mb-sm-0 opcion">
                  <font-awesome-icon icon="capsules" />
                  <label class="border-0" for="Farmacias">Farmacias</label>
                </li>
                <li class="nav opcion">
                  <font-awesome-icon icon="shopping-cart" />
                  <label class="border-0" for="Supermercado"
                    >Supermercado</label
                  >
                </li>
              </ul>
            </div>
            <hr />

            <div class="posts row mt-5 mb-5">
              <marca-promocion
                v-for="marca in marcas"
                v-bind:key="marca.id"
                v-bind:marca="marca"
              />
            </div>
          </div>
          <div class="container-btn-buscarmascategorias">
            <a href="#cajabotones">
              <button
                class="btn colorfondo-principal mx-auto btn-massegmentos"
                type="button"
              >
                Buscar mas categorías
              </button>
            </a>
          </div>
        </div>
        <!-- Fin Cajas repetitivas -->
      </div>
    </section>
    <!-- Fin Sección Encuentra tu Franquicia-->
    <!-- Inicio Sección Imagen -->
    <section class="vh-auto tienda-imagen">
      <picture>
        <source
          srcset="@/assets/img/webp/oportunidades-1.webp"
          type="image/webp"
        />
        <img src="@/assets/img/oportunidades-1.png" alt="" />
      </picture>
    </section>
    <!-- Fin Sección Imagen -->
    <oportunidades-nuevas />
    <!-- Inicio Sección como franquiciar mi negocio -->
    <section class="vh-auto mt-6 mb-6">
      <div class="container">
        <!-- Inicio Carousel  -->
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="20000">
              <div class="row contenedor-comofranquiciar">
                <div class="col-12 col-sm-6 pe-1 pe-sm-6">
                  <p class="titulo-cf mb-3 mb-sm-4">
                    ¿Cómo Franquiciar mi negocio?
                  </p>
                  <p class="texto-cf mb-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                  <button
                    type="button"
                    class="
                      btn
                      colorfondo-principal
                      btn-fmn
                      mx-auto
                      mt-0 mt-sm-4
                    "
                  >
                    Franquiciar mi negocio
                  </button>
                </div>
                <div class="col-12 col-sm-6 mt-3 mt-sm-2 ms-sm-0">
                  <picture class="como-franquiciar">
                    <source
                      srcset="@/assets/img/webp/Grupo18.webp"
                      type="image/webp"
                    />
                    <img
                      src="@/assets/img/Grupo18.png"
                      alt="imagen 18"
                      class="mx-auto"
                    />
                  </picture>
                  <img
                    src="@/assets/img/Grupo19.png"
                    alt=""
                    class="imagen-azules"
                  />
                </div>
              </div>
            </div>
            <!-- Item 2 Carousel -->
            <div class="carousel-item" data-bs-interval="2000">
              <div class="row contenedor-comofranquiciar">
                <div class="col-12 col-sm-6 pe-1 pe-sm-6">
                  <p class="titulo-cf tipo-letra mb-3 mb-sm-4">
                    ¿Cómo Franquiciar mi negocio?
                  </p>
                  <p class="texto-cf mb-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                  <button
                    type="button"
                    class="
                      btn
                      colorfondo-principal
                      btn-fmn
                      mx-auto
                      mt-0 mt-sm-4
                    "
                  >
                    Franquiciar mi negocio
                  </button>
                </div>
                <div class="col-12 col-sm-6 mt-3 mt-sm-2 ms-sm-0">
                  <picture class="como-franquiciar">
                    <source
                      srcset="@/assets/img/webp/Grupo18.webp"
                      type="image/webp"
                    />
                    <img
                      src="@/assets/img/Grupo18.png"
                      alt="imagen 18"
                      class="mx-auto"
                    />
                  </picture>
                  <img
                    src="@/assets/img/Grupo19.png"
                    alt=""
                    class="imagen-azules"
                  />
                </div>
              </div>
            </div>
            <!-- Item 3 Carousel -->
            <div class="carousel-item">
              <div class="row contenedor-comofranquiciar">
                <div class="col-12 col-sm-6 pe-1 pe-sm-6">
                  <p class="titulo-cf tipo-letra mb-3 mb-sm-4">
                    ¿Cómo Franquiciar mi negocio?
                  </p>
                  <p class="texto-cf mb-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                  <button
                    type="button"
                    class="
                      btn
                      colorfondo-principal
                      btn-fmn
                      mx-auto
                      mt-0 mt-sm-4
                    "
                  >
                    Franquiciar mi negocio
                  </button>
                </div>
                <div class="col-12 col-sm-6 mt-3 mt-sm-2 ms-sm-0">
                  <picture class="como-franquiciar">
                    <source
                      srcset="@/assets/img/webp/Grupo18.webp"
                      type="image/webp"
                    />
                    <img
                      src="@/assets/img/Grupo18.png"
                      alt="imagen 18"
                      class="mx-auto"
                    />
                  </picture>
                  <img
                    src="@/assets/img/Grupo19.png"
                    alt=""
                    class="imagen-azules"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev boton-prev pe-3 pe-sm-6"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next boton-prev ps-3 ps-sm-6"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <!-- Fin Carousel -->
      </div>
    </section>
    <!-- Fin Sección como franquiciar mi negocio -->

    <!-- Inicio Sección Categorías Recomendadas -->
        <section class="mb-5">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-8 offset-md-2 text-center">
                        <p class="titulo-section mb-3" data-i18n>Categorías Recomendadas</p>
                        <p class="tipo-letra subtitulo-bye">Invierte en una empresa de exito</p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-4 col-6">
                        <div class="card text-white sombrainterna restaurante-categoria-recomendada">
                            <div class="card-img-overlay margen-categorias-recomendadas">
                              <font-awesome-icon class="d-flex justify-content-center w-100 iconos-categorias-recomendadas" icon="utensils" />
                              <p class="card-text d-flex justify-content-center my-md-2 nombre-categoria">Restaurante</p>
                              <font-awesome-icon class="d-flex justify-content-center w-100 iconos-categorias-recomendadas" icon="arrow-circle-right" />
                            </div>
                        </div>    
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="card text-white sombrainterna moda-categoria-recomendada">
                            <div class="card-img-overlay margen-categorias-recomendadas">
                              <font-awesome-icon class="d-flex justify-content-center w-100 iconos-categorias-recomendadas" icon="capsules" />
                              <p class="card-text d-flex justify-content-center my-md-2 nombre-categoria">Farmacia</p>
                              <font-awesome-icon class="d-flex justify-content-center w-100 iconos-categorias-recomendadas" icon="arrow-circle-right" />
                            </div>
                        </div>  
                    </div>
                    <div class="col-md-4 mt-4 mt-md-0 col-6">
                        <div class="card text-white sombrainterna supermercado-categoria-recomendada">
                            <div class="card-img-overlay margen-categorias-recomendadas">
                              <font-awesome-icon class="d-flex justify-content-center w-100 iconos-categorias-recomendadas" icon="shopping-cart" />
                              <p class="card-text d-flex justify-content-center my-md-2 nombre-categoria">Supermercado</p>
                              <font-awesome-icon class="d-flex justify-content-center w-100 iconos-categorias-recomendadas" icon="arrow-circle-right" />
                            </div>
                        </div>  
                    </div>
                    <!-- 2 fila -->
                    <div class="col-md-4 mt-4 col-6">
                        <div class="card text-white sombrainterna belleza-categoria-recomendada">
                            <div class="card-img-overlay margen-categorias-recomendadas">
                              <img src="@/assets/img/Categorias-Recomendadas/belleza.png" alt="" class="mx-auto d-flex">
                              <p class="card-text d-flex justify-content-center my-md-2 nombre-categoria">Belleza</p>
                              <font-awesome-icon class="d-flex justify-content-center w-100 iconos-categorias-recomendadas" icon="arrow-circle-right" />
                            </div>
                        </div>    
                    </div>
                    <div class="col-md-4 mt-4 col-6">
                        <div class="card text-white sombrainterna deportes-categoria-recomendada">
                            <div class="card-img-overlay margen-categorias-recomendadas">
                              <font-awesome-icon class="d-flex justify-content-center w-100 iconos-categorias-recomendadas" icon="futbol" />
                              <p class="card-text d-flex justify-content-center my-md-2 nombre-categoria">Deportes</p>
                              <font-awesome-icon class="d-flex justify-content-center w-100 iconos-categorias-recomendadas" icon="arrow-circle-right" />
                            </div>
                        </div>  
                    </div>
                    <div class="col-md-4 mt-4 col-6">
                        <div class="card text-white sombrainterna saludybienestar-categoria-recomendada">
                            <div class="card-img-overlay margen-categorias-recomendadas">
                              <font-awesome-icon class="d-flex justify-content-center w-100 iconos-categorias-recomendadas" icon="spa" />
                              <p class="card-text d-flex justify-content-center my-md-2 nombre-categoria">Salud y bienestar</p>
                              <font-awesome-icon class="d-flex justify-content-center w-100 iconos-categorias-recomendadas" icon="arrow-circle-right" />
                            </div>
                        </div>  
                    </div>


                </div>

            </div>
        </section>
        <!-- Fin Sección Categorías Recomendadas -->




    <!-- Inicio Sección Blog y Eventos -->
    <section class="mb-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-8 offset-md-2 text-center">
            <p class="titulo-section mb-3" data-i18n>Blog y Eventos</p>
            <p class="tipo-letra subtitulo-bye">Tenemos información para ti</p>
          </div>
        </div>
        <div class="row mt-5 cuadros-blogyeventos">
          <!-- Primero -->
          <div
            data-aos="fade-in"
            class="col-lg-4 col-md-6 col-sm-6 col-6 padding-bye mb-5"
          >
            <div class="card card-bye card-bye-1 text-white">
              <div class="texto-bye card-body">
                <button
                  type="button"
                  class="btn-bye mb-2 mb-sm-3 colorfondo-principal tipo-letra"
                >
                  Mensajería
                </button>
                <p class="card-text tipo-letra-bold">
                  La mensajería sostenible llega al sector de las franquicias
                </p>
              </div>
              <div class="card-footer">
                <p class="card-text tipo-letra">07 de Abril del 2021</p>
              </div>
            </div>
          </div>
          <!-- Segundo -->
          <div
            data-aos="fade-in"
            data-aos-delay="100"
            class="col-lg-4 col-md-6 col-sm-6 col-6 padding-bye mb-5"
          >
            <div class="card card-bye card-bye-2 text-white">
              <div class="texto-bye card-body">
                <button
                  type="button"
                  class="btn-bye mb-2 mb-sm-3 colorfondo-principal tipo-letra"
                >
                  Delivery
                </button>
                <p class="card-text tipo-letra-bold">El auge del delivery</p>
              </div>
              <div class="card-footer">
                <p class="card-text tipo-letra">07 de Abril del 2021</p>
              </div>
            </div>
          </div>
          <!-- Tercero -->
          <div
            data-aos="fade-in"
            data-aos-delay="200"
            class="col-lg-4 col-md-6 col-sm-6 col-6 padding-bye mb-5"
          >
            <div class="card card-bye card-bye-3 text-white">
              <div class="texto-bye card-body">
                <button
                  type="button"
                  class="btn-bye mb-2 mb-sm-3 colorfondo-principal tipo-letra"
                >
                  Franquicias
                </button>
                <p class="card-text tipo-letra-bold">
                  Las franquicias conquistan los lugares más emblematicos de
                  Valencia
                </p>
              </div>
              <div class="card-footer">
                <p class="card-text tipo-letra">07 de Abril del 2021</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Inicio sección blog y eventos slider -->
        <div id="slider">
          <!-- Start Slider Checked -->
          <input type="radio" name="slider" id="slide-1-radio" checked />
          <input type="radio" name="slider" id="slide-2-radio" />
          <input type="radio" name="slider" id="slide-3-radio" />
          <!-- End Slider Checked -->

          <!-- Start Slides -->
          <div class="slides">
            <!-- Slide 1 -->
            <div class="slide">
              <div class="card card-bye card-bye-1 text-white">
                <div class="texto-bye card-body">
                  <button
                    type="button"
                    class="btn-bye mb-2 mb-sm-3 colorfondo-principal"
                  >
                    Mensajería
                  </button>
                  <p class="card-text">
                    La mensajería sostenible llega al sector de las franquicias
                  </p>
                </div>
                <div class="card-footer">
                  <p class="card-text">07 de Abril del 2021</p>
                </div>
              </div>
            </div>
            <!-- Slide 2 -->
            <div class="slide">
              <div class="card card-bye card-bye-2 text-white">
                <div class="texto-bye card-body">
                  <button
                    type="button"
                    class="btn-bye mb-2 mb-sm-3 colorfondo-principal"
                  >
                    Delivery
                  </button>
                  <p class="card-text">El auge del delivery</p>
                </div>
                <div class="card-footer">
                  <p class="">07 de Abril del 2021</p>
                </div>
              </div>
            </div>
            <!-- Slide 3 -->
            <div class="slide">
              <div class="card card-bye card-bye-3 text-white">
                <div class="texto-bye card-body">
                  <button
                    type="button"
                    class="btn-bye mb-2 mb-sm-3 colorfondo-principal"
                  >
                    Franquicias
                  </button>
                  <p class="card-text">
                    Las franquicias conquistan los lugares más emblematicos de
                    Valencia
                  </p>
                </div>
                <div class="card-footer">
                  <p class="card-text">07 de Abril del 2021</p>
                </div>
              </div>
            </div>
          </div>
          <!-- End Slides -->

          <!-- Start Slider Control -->

          <!-- Start Prevese Arrow -->
          <div class="prev-arrow arrow">
            <label for="slide-1-radio" id="prev-1-arrow">
              <div class="container-flecha">
                <font-awesome-icon icon="arrow-left" class="flecha-izquierda" />
              </div>
              <span class="thumb">
                <div class="card card-bye card-bye-1 text-white"></div>
              </span>
            </label>

            <label for="slide-2-radio" id="prev-2-arrow">
              <div class="container-flecha">
                <font-awesome-icon icon="arrow-left" class="flecha-izquierda" />
              </div>
              <span class="thumb">
                <div class="card card-bye card-bye-2 text-white"></div>
              </span>
            </label>

            <label for="slide-3-radio" id="prev-3-arrow">
              <div class="container-flecha">
                <font-awesome-icon icon="arrow-left" class="flecha-izquierda" />
              </div>
              <span class="thumb">
                <div class="card card-bye card-bye-3 text-white"></div>
              </span>
            </label>
          </div>
          <!-- End Prevese Arrow -->

          <!-- Start next Arrow -->
          <div class="next-arrow arrow">
            <label for="slide-1-radio" id="next-1-arrow">
              <div class="container-flecha-derecha">
                <font-awesome-icon icon="arrow-right" class="flecha-derecha" />
              </div>
              <span class="thumb">
                <div class="card card-bye card-bye-1 text-white"></div>
              </span>
            </label>

            <label for="slide-2-radio" id="next-2-arrow">
              <div class="container-flecha-derecha">
                <font-awesome-icon icon="arrow-right" class="flecha-derecha" />
              </div>
              <span class="thumb">
                <div class="card card-bye card-bye-2 text-white"></div>
              </span>
            </label>

            <label for="slide-3-radio" id="next-3-arrow">
              <div class="container-flecha-derecha">
                <font-awesome-icon icon="arrow-right" class="flecha-derecha" />
              </div>
              <span class="thumb">
                <div class="card card-bye card-bye-3 text-white"></div>
              </span>
            </label>
          </div>
          <!-- Start next Arrow -->
          <!-- End Slider Control -->
        </div>
        <!-- End Slider -->
      </div>
    </section>
    <!-- Fin Sección Blog y Eventos -->
    <!-- Inicio Sección Publicita tu empresa -->
    <section class="section-publicita mt-3 mt-sm-0">
      <picture>
        <source
          srcset="@/assets/img/webp/fondo-publicita.webp"
          type="image/webp"
        />
        <img src="@/assets/img/fondo-publicita.png" alt="" />
      </picture>
      <div class="container">
        <div class="row">
          <div
            class="col-md-8 col-lg-6 col-12 col-sm-9 container-text-publicita"
          >
            <div class="container-titulo-publicita">
              <h5 class="mt-4 ms-0 ms-sm-2 ms-xl-4" data-aos="fade-right">
                Anuncia con nosotros <br />
                Y publicita tu empresa
              </h5>
            </div>
            <div class="container-btn-publicita">
              <button
                class="btn btn-publicita mt-3 mt-sm-3 px-4"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Contactar
              </button>
            </div>
          </div>
          <div
            class="
              col-md-3 col-lg-5
              container-bocina
              col-sm-3
              ms-sm-0 ms-xl-2
              ps-lg-5
              pt-md-3 pt-lg-0
            "
          >
            <picture>
              <source srcset="@/assets/img/webp/bocina.webp" type="image/webp" />
              <img
                src="@/assets/img/bocina.png"
                alt=""
                class="bocina ms-lg-5 ms-sm-0"
                data-aos="fade-left"
                data-aos-delay="200"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
    <!-- Fin Sección Publicita tu empresa -->
  </main>
</template>
<script>
import BannerHome from "@/components/Home/BannerHome";
import OportunidadesNuevas from "@/components/Home/OportunidadesNuevas";

import MarcaPromocion from "@/components/Marca/MarcaPromocion";
import axios from "axios";

export default {
  name: "Home",
  components: {
    BannerHome,
    OportunidadesNuevas,
    MarcaPromocion,
  },
  data() {
    return {
      image: require("@/assets/img/logos-02.png"),
      marcas: [],
    };
  },
  created() {
    this.getMarcasPromocion();
  },
  methods: {
    // mouseover: function () {
    //   this.image = require("../assets/img/fotos-franquicia-25.png");
    // },
    // mouseleave: function () {
    //   this.image = require("../assets/img/logos-02.png");
    // },
    getMarcasPromocion() {
      axios
        .get("http://127.0.0.1:8000/api/v1/marcas/?estado__nombre=Promoción")
        .then((response) => {
          this.marcas = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
/* 
*{
  margin: 0;
  padding: 0;
  border: 0
}

body{background-color: #ffffff} */

.activee{
  color: #fa5e4d;
}

#slider img {
  display: block;
  width: 100%;
  height: 100%;
}
/**-------------- Start Slider ---------------**/
#slider {
  width: 100%;
  height: 200px;
  position: relative;
  margin: auto;
  padding: 0 0 0 0;
}

#slider input {
  display: none;
}

#slider .slides {
  position: absolute;
  width: 100%;
  height: 400px;
}

#slider .slides .slide {
  width: 33.33333333%;
  height: 100%;
  float: left;

  filter: alpha(opacity=70); /* for IE */
  opacity: 0.7;
}

#slider .arrow label {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 0;
  width: 100px;
  height: 45px;
  margin-top: -22.5px;
  text-align: center;
  display: none;
}

#slider .next-arrow label {
  right: 0;
  left: auto;
}

#slider .arrow label:hover .thumb {
  -webkit-transform: rotateY(0);
  -ms-transform: rotateY(0);
  transform: rotateY(0);

  -webkit-transition: transform 0.5s ease-in;
  transition: transform 0.5s ease-in;
}

#slider .arrow label div {
  display: block;
  width: 40%;
  height: 45px;
  background-color: #fa5e4d;
  color: #fff;
  line-height: 45px;
}

#slider .arrow label .container-flecha-derecha {
  float: right;
}

#slider .arrow label .thumb {
  display: block;
  width: 60%;
  height: 45px;
}

#slider .prev-arrow label > .flecha-izquierda {
  float: left;
}

#slider .prev-arrow label .thumb {
  float: right;

  -webkit-transform: rotateY(-90deg);
  -ms-transform: rotateY(-90deg);
  transform: rotateY(-90deg);

  -webkit-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
}

#slider .next-arrow label > .flecha-derecha {
  float: right;
}

#slider .next-arrow label .thumb {
  float: left;

  -webkit-transform: rotateY(90deg);
  -ms-transform: rotateY(90deg);
  transform: rotateY(90deg);

  -webkit-transform-origin: right center;
  -ms-transform-origin: right center;
  transform-origin: right center;
}

#slide-1-radio:checked ~ .slides .slide:first-child {
  position: relative;
  z-index: 1;
  box-shadow: 0 1px 20px rgba(255, 255, 255, 0.7);

  filter: alpha(opacity=100); /* for IE */
  opacity: 1;

  -webkit-transform: translateX(100%) scale(1.2);
  -ms-transform: translateX(100%) scale(1.2);
  transform: translateX(100%) scale(1.2);

  -webkit-transition: transform 0.7s ease-in-out;
  transition: transform 0.7s ease-in-out;
}

#slide-1-radio:checked ~ .slides .slide:nth-child(2) {
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);

  -webkit-transition: transform 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;
}

#slide-1-radio:checked ~ .prev-arrow #prev-3-arrow,
#slide-1-radio:checked ~ .next-arrow #next-2-arrow {
  display: inline-block;
}

#slide-2-radio:checked ~ .slides .slide:nth-child(2) {
  position: relative;
  z-index: 1;
  box-shadow: 0 1px 20px rgba(255, 255, 255, 0.7);

  filter: alpha(opacity=100); /* for IE */
  opacity: 1;

  -webkit-transform: translateX(0) scale(1.2);
  -ms-transform: translateX(0) scale(1.2);
  transform: translateX(0) scale(1.2);

  -webkit-transition: transform 0.7s ease-in-out;
  transition: transform 0.7s ease-in-out;
}

#slide-2-radio:checked ~ .slides .slide:first-child {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);

  -webkit-transition: transform 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;
}

#slide-2-radio:checked ~ .prev-arrow #prev-1-arrow,
#slide-2-radio:checked ~ .next-arrow #next-3-arrow {
  display: inline-block;
}

#slide-3-radio:checked ~ .slides .slide:last-child {
  position: relative;
  z-index: 1;
  box-shadow: 0 1px 20px rgba(255, 255, 255, 0.7);

  filter: alpha(opacity=100); /* for IE */
  opacity: 1;

  -webkit-transform: translateX(-100%) scale(1.2);
  -ms-transform: translateX(-100%) scale(1.2);
  transform: translateX(-100%) scale(1.2);

  -webkit-transition: transform 0.7s ease-in-out;
  transition: transform 0.7s ease-in-out;
}

#slide-3-radio:checked ~ .slides .slide:nth-child(2) {
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transform: translateX(100%);

  -webkit-transition: transform 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;
}

#slide-3-radio:checked ~ .prev-arrow #prev-2-arrow,
#slide-3-radio:checked ~ .next-arrow #next-1-arrow {
  display: inline-block;
}
/**-------------- End Slider ---------------**/


/**-------------- Categoria Recomendadas ---------------**/
.sombrainterna {
    background-repeat: no-repeat;
    background-size: 107%;
    transition: all .5s linear;
    border-color: white;
    border-radius: 1.9375em;
    box-shadow: inset 0px -5.125em 5em #02c7d7;
    height: 25.125em;
    width: 100%;
    -webkit-border-radius: 1.9375em;
    -moz-border-radius: 1.9375em;
    -ms-border-radius: 1.9375em;
    -o-border-radius: 1.9375em;
    -webkit-transition: all .5s linear;
    -moz-transition: all .5s linear;
    -ms-transition: all .5s linear;
    -o-transition: all .5s linear;
}

.restaurante-categoria-recomendada{
    background-image: url("../assets/img/Categorias-Recomendadas/restaurante-categoria-recomendada.jpg");
}

.sombrainterna:hover {
    background-size: 120% ;
    background-position: center center;
}

.moda-categoria-recomendada{
    background-image: url("../assets/img/Categorias-Recomendadas/moda-categoria-recomendada.jpg");
}

.supermercado-categoria-recomendada{
    background-image: url("../assets/img/Categorias-Recomendadas/supermercado-categoria-recomendada.jpg");
}

.belleza-categoria-recomendada{
    background-image: url("../assets/img/Categorias-Recomendadas/belleza-categoria-recomendada.jpg");
}

.belleza-categoria-recomendada > div > img{
    width: 1.5em;
    height: 1.5em;
}

.deportes-categoria-recomendada{
    background-image: url("../assets/img/Categorias-Recomendadas/deportes-categoria-recomendada.jpg");
}

.saludybienestar-categoria-recomendada{
    background-image: url("../assets/img/Categorias-Recomendadas/saludybienestar-categoria-recomendada.jpg");
}

.margen-categorias-recomendadas{
    padding: 17em 3em 0rem;
}

.iconos-categorias-recomendadas{
    font-size: 1.5em;
}

.nombre-categoria{
    font-size: 1.75em;
    font-family: "GT Walsheim Pro Bold";
    font-weight: 900;
}






/**-------------- End Categoria Recomendadas ---------------**/


/**----------- Start Media ----------**/

@media (min-width: 576px) {
  #slider {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  #slider {
    width: 100%;
  }

  #slider .slides {
    height: 175px;
  }

  #slider .arrow label {
    width: 80px;
  }
}
/**----------- End Media ----------**/
</style>