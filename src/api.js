import axios from "axios";
function getMarcas() {
  const path2 = "http://127.0.0.1:8000/api/v1/marcas/";
  axios
    .get(path2)
    .then((response) => {
      this.marcas = response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
}
export default {
  getMarcas,
};
