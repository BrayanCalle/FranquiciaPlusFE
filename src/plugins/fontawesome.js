import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faSearch,
  faBars,
  faTimes,
  faStore,
  faUtensils,
  faBriefcase,
  faTshirt,
  faCapsules,
  faShoppingCart,
  faThLarge,
  faArrowLeft,
  faArrowRight,
  faAngleLeft,
  faAngleRight,
  faArrowCircleRight,
  faFutbol,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faStar,
  faSearch,
  faBars,
  faTimes,
  faStore,
  faUtensils,
  faBriefcase,
  faTshirt,
  faCapsules,
  faInstagram,
  faFacebook,
  faLinkedin,
  faTiktok,
  faShoppingCart,
  faThLarge,
  faArrowLeft,
  faArrowRight,
  faAngleLeft,
  faAngleRight,
  faArrowCircleRight,
  faFutbol,
  faSpa,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
