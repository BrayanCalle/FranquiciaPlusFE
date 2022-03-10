<template>
  <footer>
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

      <div class="col-10 col-sm-0 col-md-4 mt-4 mt-sm-5 px-3 container-footer2">
        <div class="ms-md-4">
          <p class="titulo-footer mb-4">Contacto</p>
          <p class="letra-principal">
            Av. Francisco de Orellana y Miguel H Alcívar. Centro Empresarial Las
            Cámaras Piso 12. Guayaquil - Ecuador.
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
  </footer>
  <!-- Fin Footer -->
</template>

<style scoped>
/* Footer */
footer {
  background-color: #efefef;
  width: 100%;
}

footer > .row:first-of-type{
  width: 100%;
  margin-left: 0px;
}

.container-footer1 div {
  width: fit-content;
}

.container-footer1 p {
  font-size: 1.3em;
  font-family: "GT Walsheim Pro Regular";
}

.container-footer1 img {
  width: 85%;
}

.social-icons {
  font-size: 2em;
  color: #fa5e4d;
}

.social-icons-3 {
  font-size: 2.5em;
  color: #fa5e4d;
  display: flex;
  /* justify-content: center; */
  padding-left: 0.5em;
}

.social-icons i,
.social-icons-3 i {
  padding-right: 0.25em;
}

.container-footer2 div {
  width: fit-content;
}

.container-footer3 div {
  width: fit-content;
}

footer .titulo-footer {
  color: #fa5e4d;
  font-family: "GT Walsheim Pro Bold";
  font-size: 1.5em;
}

footer ul li a {
  color: black;
  padding-left: 0em;
  font-family: "GT Walsheim Pro Regular";
  line-height: 1.5em;
  text-decoration: none;
}

footer ul li a:hover {
  color: #fa5e4d;
}
</style>