import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faSearch,
  faBars,
  faTimes,
  faStore,
  faUtensils,
  faTshirt,
  faCapsules,
  faShoppingCart,
  faThLarge,
  faArrowLeft,
  faArrowRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faStar,
  faSearch,
  faBars,
  faTimes,
  faStore,
  faUtensils,
  faTshirt,
  faCapsules,
  faInstagram,
  faFacebook,
  faYoutube,
  faShoppingCart,
  faThLarge,
  faArrowLeft,
  faArrowRight,
  faAngleLeft,
  faAngleRight,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
