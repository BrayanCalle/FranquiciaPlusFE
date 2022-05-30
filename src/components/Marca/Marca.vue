<template>
  <!-- Primer Cuadro -->
  <div class="d-inline-block mb-5 col-6 col-lg-4">
    <div class="card h-100 contenedor-marcas">
      <div v-if="(marca.estado != null)">
        <button
          type="button"
          class="btn-popular colorfondo-principal mt-3 ms-3"
        >
          {{marca.estado.nombre}}
        </button>
      </div>
      <div v-else>

      </div>
      
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
        <div class="col-8 col-md-7 d-inline-block">
          <h5 class="card-title titulo-card">{{ marca.nombre }}</h5>
        </div>
        <div class="col-md-4 d-inline-block">
          <p class="color-principal tipo-letra d-flex justify-content-end">{{ marca.precio | dollar }}</p>
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
          <a class="d-flex justify-content-end" :href="'/marcas/'+ marca.urlmarca">
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
  name: "Marca",

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