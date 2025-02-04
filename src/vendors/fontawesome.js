import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  faQuestionCircle,
  faPercent,
  faComment,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faQuestionCircle, faPercent, faComment, faDatabase);
Vue.component("font-awesome-icon", FontAwesomeIcon);