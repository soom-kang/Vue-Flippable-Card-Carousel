import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faChevronRight, faChevronLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);
