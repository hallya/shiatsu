import Vue from 'vue';

import frenchDate from './frenchDate';
import capitalize from './capitalize';
import textPreview from './textPreview';

Vue.filter('frenchDate', frenchDate);
Vue.filter('capitalize', capitalize);
Vue.filter('textPreview', textPreview);
