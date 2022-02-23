<template>
  <footer>
    <div class="container">
      <div class="row ps-3 ps-sm-0 pb-5">
        <div class="col-md-4 mt-5 px-3 container-footer1">
          <div class="mx-md-auto">
            <a href="index.html">
              <img src="../assets/img/logo.png" alt="" />
            </a>
            <p class="mt-4">¡Negocios que Funcionan!</p>
            <div class="social-icons mt-4">
              <font-awesome-icon :icon="['fab', 'instagram']" />
              <font-awesome-icon :icon="['fab', 'facebook']" class="" />
              <font-awesome-icon :icon="['fab', 'youtube']" class="" />
            </div>
          </div>
        </div>

        <!-- Este aparece en tamaño menor a 768px -->
        <div class="col-md-4 mt-5 container-footer3-desaparece">
          <div class="mx-md-auto">
            <p class="titulo-footer mb-4">Acerca de</p>

            <ul>
              <div class="row">
                <div class="col-6">
                  <li>
                    <a href="#">Franquicia Plus</a>
                  </li>
                  <li>
                    <a href="#">Franquicias</a>
                  </li>
                </div>
                <div class="col-6">
                  <li>
                    <a href="#">Representaciones</a>
                  </li>
                  <li>
                    <a href="#">Blogs y Noticias</a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>

        <!-- Fin aparece en tamaño menor a 768px -->

        <div
          class="col-10 col-sm-0 col-md-4 mt-4 mt-sm-5 px-3 container-footer2"
        >
          <div class="ms-md-4">
            <p class="titulo-footer mb-4">Contacto</p>
            <p class="letra-principal">
              Av. Francisco de Orellana y Miguel H Alcívar. Centro Empresarial
              Las Cámaras Piso 12. Guayaquil - Ecuador.
            </p>
            <p class="mt-4 letra-principal">
              +593(4)371-3181 <br />
              Soporte 24/7 Ext.: 302
            </p>
            <p class="mt-4 letra-principal">
              Lunes-Viernes: 8:30 - 17:30 <br />
              Cerrado los fines de semana
            </p>
          </div>
        </div>

        <div class="col-md-4 mt-5 container-footer3">
          <div class="mx-md-auto">
            <p class="titulo-footer mb-4">Acerca de</p>

            <ul>
              <li>
                <a href="#">Franquicia Plus</a>
              </li>
              <li>
                <a href="#">Franquicias</a>
              </li>

              <li>
                <a href="#">Representaciones</a>
              </li>
              <li>
                <a href="#">Blogs y Noticias</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="social-icons-2 mt-5 mt-sm-4">
          <font-awesome-icon :icon="['fab', 'instagram']" />
          <font-awesome-icon :icon="['fab', 'facebook']" />
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </div>
      </div>
    </div>
  </footer>
  <!-- Fin Footer -->
</template>

<style scoped>
</style>