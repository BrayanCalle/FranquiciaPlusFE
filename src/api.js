import axios from "axios";

const apiMarcas = {
  Marcas: function () {
    return axios.get("http://127.0.0.1:8000/api/v1/marcas/");
  },
  filtrarMarcas: function (filtros) {
    return axios.get("http://127.0.0.1:8000/api/v1/marcas/?" + filtros);
  },
};

export default apiMarcas
