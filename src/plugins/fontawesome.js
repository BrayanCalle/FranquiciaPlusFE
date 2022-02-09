import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faSearch,
  faBars,
  faTimes,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faStar, faSearch, faBars, faTimes, faStore);

Vue.component("font-awesome-icon", FontAwesomeIcon);
