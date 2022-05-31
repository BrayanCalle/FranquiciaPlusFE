<template>
  <!-- Inicio Footer -->
    <footer>
        <!-- <div class="container"> -->
            <div class="row ps-sm-0 pb-5 pb-md-2 row-footer">
                <div class="col-md-4 pt-4 pb-4 pb-md-0 pt-md-5 px-5 px-md-3 container-footer1">
                    <div class="mx-md-auto">
                        <a href="/">
                            <img src="@/assets/img/log-blanco.png" alt="">
                        </a>
                        <p class="mt-4">¡Negocios que Funcionan!</p>

                        <div class="social-icons mt-4">
                            <a target="_blank" href="https://www.instagram.com/franquicia_plus/">
                              <font-awesome-icon :icon="['fab','instagram']" />
                            </a>
                            <a target="_blank" href="https://www.tiktok.com/">
                                <font-awesome-icon :icon="['fab','tiktok']" />
                            </a>
                            <a target="_blank" href="https://www.facebook.com/franquiciaplus/">
                                <font-awesome-icon :icon="['fab','facebook']" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/company/franquicia-plus/">
                                <font-awesome-icon :icon="['fab','linkedin']" />
                            </a>
                            <button type="button" class="btn btn-informacion" data-bs-toggle="modal" data-bs-target="#myModal">
                                i
                            </button>
    
    
                            <!-- The Modal -->
                            <div class="modal" id="myModal">
                                <div class="modal-dialog modal-dialog-scrollable">
                                    <div class="modal-content">
    
                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                            <h4 class="modal-title">Franquicia Plus</h4>
                                        </div>
    
                                        <!-- Modal body -->
                                        <div class="modal-body cuerpo-modal">
                                            Franquicia Plus es una empresa de venta de <h1>franquicias en Ecuador</h1> ,
                                            especializado en la asesoría, consultoría y <h2>venta de franquicias</h2> en
                                            todo latinoamérica.
                                            Nos caracterizamos por tener las mejores empresas, <h2>franquicias</h2> y
                                            <h2>representaciones</h2> en todo Ecuador trabajando con nosotros, nuestros
                                            servicios de F+ se encuentran localizados en Quito, Guayaquil y Cuenca con
                                            alcance a nivel nacional.
                                            Tenemos como clientes <h3>franquicias de farmacias</h3>, <h3>franquicias de
                                            comida</h3>, y marcas conocidas como <h4>franquicias de kfc</h4>, <h4>
                                            franquicias de Disensa</h4>, tambien <h4>franquicias de Servientrega</h4>,
                                            <h4>franquicias de starbucks</h4>, y una de las mas cotizadas como <h4>
                                            franquicias de helados bogati</h4> y <h4>franquicias sweet and coffee</h4>.
                                            La <h5>plataforma de franquicias</h5> , sirve como un conector entre las
                                            <h5>franquicias y los franquiciantes</h5>, en donde las nuevas
                                            oportunidades de negocio son visibles para todas las personas.
                                        </div>
    
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-cerrar-modal"
                                                data-bs-dismiss="modal">Cerrar</button>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Este aparece en tamaño menor a 768px -->
                <div class="col-md-4 pb-4 pb-md-0 px-5 mt-3 mt-md-5 container-footer3-desaparece">
                    <div class="mx-md-auto">

                        <p class="titulo-footer mb-2">Acerca de</p>

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


                <div class="col-12 col-sm-0 col-md-4 pt-4 pt-sm-5 px-5 container-footer2">
                    <div class="ms-md-4">
                        <p class="titulo-footer mb-4">Contacto</p>
                        <p class="letra-principal letra-blanca">
                            De los Establos y Av. de los Conquistadores, edificio Cemacol
                            Cumbayá - Quito - Ecuador
                        </p>
                        <p class="mt-3 letra-principal letra-blanca">
                            +593 98 858 8901
                        </p>
                        <p class="mt-3 pb-4 letra-principal letra-blanca">
                            Lunes-Viernes: 8:30 - 17:30 <br>
                            Cerrado los fines de semana
                        </p>
                    </div>
                </div>

                <div class="col-md-4 pt-5 container-footer3">
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
                    <a target="_blank" href="https://www.instagram.com/franquicia_plus/">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </a>
                    <a target="_blank" href="https://www.tiktok.com/">
                        <font-awesome-icon :icon="['fab', 'tiktok']" />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/franquiciaplus/">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/franquicia-plus/">
                        <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </a>
                </div>

            </div>
            <!-- </div> -->
            <p class="d-flex justify-content-center pb-2 tipo-letra letra-blanca">Copyright &copy; 2022</p>
    </footer>
    <!-- Fin Footer -->
</template>

<style scoped>
/* Footer */
footer{
    background-color: #f7a4a4;
    width: 100%;
}

.row-footer{
    width: 100%;
    margin-left: 0px;
}

.container-footer1{
    background-color: #fa5e4d;
}

.container-footer1 div{
    width: fit-content;
}

.container-footer1 p{
    font-size: 1.3em;
    font-family: 'GT Walsheim Pro Regular';
    color: #fff;
}

.container-footer1 img{
    width: 85%;
}

.social-icons{
    font-size: 2em;
    color: #fa5e4d;
}

.social-icons a,
.social-icons-2 a{
    color: #DDDDDD;
}

.social-icons-3{
    font-size: 2.5em;
    color: #fa5e4d;
    display: flex;
    /* justify-content: center; */
    padding-left: 0.5em;
}

.social-icons-3 > a > i{
    color: #fa5e4d;
}

.social-icons i,
.social-icons-3 i
{
    padding-right: 0.25em;
}

.social-icons > button{
    background-color: #DDDDDD;
    color: #f96c62;
}

.container-footer2{
    background: #f96c62;
}

.container-footer2 div{
    width: fit-content;
}

.container-footer2 > div > .letra-blanca{
    color: #fff;
}

.letra-blanca{
    color: #fff;
}

.container-footer3{
    background: #FF8683;
}

.container-footer3 div{
    width: fit-content;
}

footer .titulo-footer{
    color: #dddddd;
    font-family: 'GT Walsheim Pro Bold';
    font-size: 1.5em;
}

footer ul li a{
    color: #fff;
    padding-left: 0em;
    font-family: 'GT Walsheim Pro Regular';
    line-height: 1.5em;
    text-decoration: none;
}

footer ul li a:hover{
    color: #FA5E4D;
    
}

.btn-informacion{
    background-color: #FA5E4D;
    color: #fff;
    height: 28px;
    border: transparent;
    margin-bottom: 9px;
    padding-top: 1px;
}

.btn-informacion:hover,
.btn-informacion:focus{
    background: #fff;
    box-shadow: 0 0 0 0.08rem #f44336;
    border-color: #FA5E4D;
    color: #FA5E4D;
}

.btn-cerrar-modal{
    color: #fff;
    background-color: #FA5E4D;
    border-color: #FA5E4D;
}

.btn-cerrar-modal:hover{
    background: #fff;
    border-color: #FA5E4D;
    color: #FA5E4D;
}

.cuerpo-modal{
    font-size: 0.875em;
    color: #000;
}

</style>