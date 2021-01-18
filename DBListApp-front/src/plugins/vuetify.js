import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ReturnIcon from '../components/ReturnIcon.vue';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {/**/},
  icons: {
    values: {
      custom: {
        component: ReturnIcon,
      },
    },
  },
});
