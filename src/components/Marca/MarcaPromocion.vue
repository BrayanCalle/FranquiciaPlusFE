<template>
  <!-- Primer Cuadro -->
  <div
    class="post col-lg-4 col-md-6 col-sm-6 col-6 contenedor-padding mb-5"
    :data-category="marca.categoria.nombre"
  >
    <div class="card h-100 contenedor-marcas">
      <div v-if="hover">
        <button
          type="button"
          class="btn-popular colorfondo-principal mt-3 ms-3"
        >
          {{marca.estado.nombre}}
        </button>
        <img
          v-bind:src="marca.imagenlocal"
          @mouseover="hover = true"
          @mouseleave="hover = false"
          class="card-img-top"
          :alt="marca.nombre"
        />
      </div>
      <div v-else>
        <button
          type="button"
          class="btn-popular colorfondo-principal mt-3 ms-3"
        >
          {{marca.estado.nombre}}
        </button>
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
          <p class="color-principal tipo-letra">{{ marca.precio | dollar }}</p>
        </div>
        <p class="card-text color-parrafos tipo-letra cuerpo-card">
          {{ marca.descripcion }}
        </p>
      </div>
      <div class="card-terminacion">
        <div class="col-7 d-inline-block color-parrafos tipo-letra">
          <font-awesome-icon
            class="color-principal"
            :icon="marca.categoria.iconofp"
          />
          <small>{{ marca.categoria.nombre }}</small>
        </div>
        <div class="col-4 d-inline-block ps-2 ps-sm-4">
          <a :href="'marcas/'+ marca.urlmarca">
            <button type="button" class="btn-consultar colorfondo-principal">
              Consultar
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Fin Primer Cuadro -->
</template>

<script>
export default {
  name: "Marcapromocion",

  data() {
    return {
      hover: false,
      // iconom: 'store',
    };
  },

  props: ["marca"],

  //   {
  // marcas: {
  //   type: Array,
  //   default: () => [],
  // },
  //   },
};
</script>

<style>
</style>