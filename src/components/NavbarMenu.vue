<template>
  <header>
    <!-- Contenido arriba del nav -->
    <nav class="toolbar mt-4 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-4 distancia-imagen">
            <a href="index.html" class="">
              <img
                src="../assets/img/logo-franquicia.png"
                alt="Logo Franquicia"
                class="logo-toolbar"
              />
            </a>
          </div>
          <div class="col-4 col-md-2 pais-container">
            <!-- Icono -->
            <a href="#" class="world-icon">
              <svg
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 360 299.25"
              >
                <defs></defs>
                <path
                  class="cls-1"
                  d="M196.27,205.36c18.64-5.17,32.11-15.52,41-31.1-.24-.14-.31-.22-.39-.22Q222,174,207,174a1.53,1.53,0,0,0-1,1C204.23,185.38,201.67,195.53,196.27,205.36Zm-75-31.27a60.86,60.86,0,0,0,16.93,19.66,65.23,65.23,0,0,0,24,11.51c-.75-1.45-1.36-2.6-1.91-3.76-4-8.34-6.14-17.14-7.63-26.1-.18-1.1-.57-1.43-1.75-1.43-9.41.05-18.82,0-28.23,0C122.28,174,121.86,174.05,121.26,174.09ZM196.3,89c.77,1.51,1.39,2.64,1.94,3.81,4,8.33,6.15,17.14,7.64,26.1.19,1.15.59,1.49,1.84,1.48,9.37-.05,18.73,0,28.1,0,.45,0,.91-.06,1.56-.11C228.36,104.51,214.89,94.18,196.3,89Zm-75.1,31.24c.48.06.72.12,1,.12,9.71,0,19.42,0,29.13,0,1.12,0,1.25-.52,1.39-1.33,1.73-10.18,4.21-20.17,9.32-29.44,0-.1,0-.22,0-.54C143.65,94.19,130.18,104.54,121.2,120.25Zm42.34,53.83a3.67,3.67,0,0,0,0,.59C165,183,167,191.2,171,198.81a33.35,33.35,0,0,0,5.22,7.08c2,2.15,4.07,2.07,6.23,0a25.58,25.58,0,0,0,4-5c3.74-6.2,5.75-13,7.31-19.89.51-2.25.92-4.52,1.39-6.84Zm31.62-53.77c-1.59-9-3.6-17.68-8.09-25.69a31.34,31.34,0,0,0-5-6.38c-1.75-1.8-3.75-1.76-5.57,0a27.16,27.16,0,0,0-4.37,5.29c-3.37,5.44-5.25,11.41-6.77,17.48-.76,3.05-1.34,6.13-2,9.32Zm1.31,10.21H162.11a171.84,171.84,0,0,0,0,33.33h34.36A172.63,172.63,0,0,0,196.47,130.52Zm10.9,0a187.62,187.62,0,0,1,0,33.35h34.27a56.35,56.35,0,0,0,0-33.35Zm-90.44,33.33H151.2a189.92,189.92,0,0,1,0-33.3H116.93A56.18,56.18,0,0,0,116.93,163.83Zm-13.41-13.35v-6.59a12.5,12.5,0,0,0,.24-1.47,63.73,63.73,0,0,1,6.54-24.2,71.86,71.86,0,0,1,33-32.82A78.73,78.73,0,0,1,192.51,78c17.26,2.81,31.85,10.37,43.37,22.57,15.69,16.63,21.7,36.12,18.12,58-2.19,13.44-8.42,25.29-18.21,35.4-11.65,12-26.1,19.57-43.3,22.45-3.09.52-6.23.76-9.35,1.13h-7.7a11.39,11.39,0,0,0-1.14-.21A75.86,75.86,0,0,1,140,207.24c-20.1-11.73-32.15-28.49-35.69-50.39C104,154.74,103.79,152.61,103.52,150.48Z"
                />
              </svg>
            </a>
            <!-- idioma -->
            <div
              class="sidebar-box"
              id="select-pais"
              onchange="seleccionarIdioma();"
            >
              <select class="styled-select select-idioma">
                <option value="ES" selected>ES</option>
                <option value="EN">EN</option>
              </select>
            </div>
            <!-- select prueba -->
            <!-- País -->
            <div class="sidebar-box">
              <select class="styled-select">
                <option>EC</option>
                <option>PR</option>
                <option>MX</option>
                <option>USA</option>
              </select>
            </div>
            <!-- fin prueba  -->
          </div>
          <!-- buscador -->
          <div class="col-7 col-md-6 buscador-container-grande">
            <div class="container-fluid buscador-container mt-2">
              <div class="d-flex justify-content-end">
                <font-awesome-icon icon="search" class="icon-search" />
                <input
                  class="buscador me-2 my-auto"
                  type="search"
                  placeholder="Buscar Franquicia y Representación"
                  aria-label="Search"
                />
              </div>
            </div>
          </div>
          <!-- boton menu -->
          <div class="col-1 col-md-1 navbar-light menu-container">
            <div class="container-fluid">
              <button
                class="navbar-toggler btn-menu"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <font-awesome-icon icon="bars" class="" />
              </button>
            </div>
          </div>
          <div class="collapse container-menu" id="navbarToggleExternalContent">
            <div class="bg-white p-4 ms-auto content-menu">
              <div class="container-fluid mb-2 container-btn-menu">
                <button
                  class="navbar-toggler btn-menu close-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggleExternalContent"
                  aria-controls="navbarToggleExternalContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fas fa-times"></i>
                  <font-awesome-icon icon="times" class="" />
                </button>
              </div>
              <!-- <div class="close-btn">
                                <i class="fas fa-times"></i>
                            </div> -->
              <!-- Contenido dentro del menu -->
              <div class="contenido-menu">
                <div class="logo-menu">
                  <a href=""
                    ><img src="../assets/img/logo-franquicia.png" alt=""
                  /></a>
                </div>

                <div class="pais-container-menu">
                  <!-- Icono -->
                  <a href="#" class="world-icon">
                    <svg
                      id="Capa_1"
                      data-name="Capa 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 360 299.25"
                    >
                      <defs></defs>
                      <path
                        class="cls-1"
                        d="M196.27,205.36c18.64-5.17,32.11-15.52,41-31.1-.24-.14-.31-.22-.39-.22Q222,174,207,174a1.53,1.53,0,0,0-1,1C204.23,185.38,201.67,195.53,196.27,205.36Zm-75-31.27a60.86,60.86,0,0,0,16.93,19.66,65.23,65.23,0,0,0,24,11.51c-.75-1.45-1.36-2.6-1.91-3.76-4-8.34-6.14-17.14-7.63-26.1-.18-1.1-.57-1.43-1.75-1.43-9.41.05-18.82,0-28.23,0C122.28,174,121.86,174.05,121.26,174.09ZM196.3,89c.77,1.51,1.39,2.64,1.94,3.81,4,8.33,6.15,17.14,7.64,26.1.19,1.15.59,1.49,1.84,1.48,9.37-.05,18.73,0,28.1,0,.45,0,.91-.06,1.56-.11C228.36,104.51,214.89,94.18,196.3,89Zm-75.1,31.24c.48.06.72.12,1,.12,9.71,0,19.42,0,29.13,0,1.12,0,1.25-.52,1.39-1.33,1.73-10.18,4.21-20.17,9.32-29.44,0-.1,0-.22,0-.54C143.65,94.19,130.18,104.54,121.2,120.25Zm42.34,53.83a3.67,3.67,0,0,0,0,.59C165,183,167,191.2,171,198.81a33.35,33.35,0,0,0,5.22,7.08c2,2.15,4.07,2.07,6.23,0a25.58,25.58,0,0,0,4-5c3.74-6.2,5.75-13,7.31-19.89.51-2.25.92-4.52,1.39-6.84Zm31.62-53.77c-1.59-9-3.6-17.68-8.09-25.69a31.34,31.34,0,0,0-5-6.38c-1.75-1.8-3.75-1.76-5.57,0a27.16,27.16,0,0,0-4.37,5.29c-3.37,5.44-5.25,11.41-6.77,17.48-.76,3.05-1.34,6.13-2,9.32Zm1.31,10.21H162.11a171.84,171.84,0,0,0,0,33.33h34.36A172.63,172.63,0,0,0,196.47,130.52Zm10.9,0a187.62,187.62,0,0,1,0,33.35h34.27a56.35,56.35,0,0,0,0-33.35Zm-90.44,33.33H151.2a189.92,189.92,0,0,1,0-33.3H116.93A56.18,56.18,0,0,0,116.93,163.83Zm-13.41-13.35v-6.59a12.5,12.5,0,0,0,.24-1.47,63.73,63.73,0,0,1,6.54-24.2,71.86,71.86,0,0,1,33-32.82A78.73,78.73,0,0,1,192.51,78c17.26,2.81,31.85,10.37,43.37,22.57,15.69,16.63,21.7,36.12,18.12,58-2.19,13.44-8.42,25.29-18.21,35.4-11.65,12-26.1,19.57-43.3,22.45-3.09.52-6.23.76-9.35,1.13h-7.7a11.39,11.39,0,0,0-1.14-.21A75.86,75.86,0,0,1,140,207.24c-20.1-11.73-32.15-28.49-35.69-50.39C104,154.74,103.79,152.61,103.52,150.48Z"
                      />
                    </svg>
                  </a>
                  <!-- idioma -->
                  <div class="sidebar-box select-pais">
                    <select class="styled-select">
                      <option selected>ES</option>
                      <option value="EN">EN</option>
                    </select>
                  </div>
                  <!-- select prueba -->
                  <!-- País -->
                  <div class="sidebar-box">
                    <select class="styled-select">
                      <option>EC</option>
                      <option>PR</option>
                      <option>MX</option>
                      <option>USA</option>
                    </select>
                  </div>
                  <!-- fin prueba  -->
                </div>

                <ul>
                  <li><a href="">Franquicia Plus</a></li>
                  <li><a href="">Franquicias</a></li>
                  <li><a href="">Representaciones</a></li>
                  <li><a href="">Blog y Noticias</a></li>
                </ul>

                <div class="social-icons-3 mt-4">
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-youtube"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="css" scoped></style>
