import Vue from 'vue';

import frenchDate from './toFrenchDateFormat';
import capitalize from './capitalize';
import toTimestamp from './toTimestamp';

Vue.filter('frenchDate', frenchDate);
Vue.filter('timestamp', toTimestamp);
Vue.filter('capitalize', capitalize);
