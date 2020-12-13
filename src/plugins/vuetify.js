import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
        iconfont:'md',
        theme: {
                themes: {
                        light: {
                                primary: colors.blue.lighten2,
                                secondary: colors.grey.lighten2,
                                accent: colors.shades.white,
                                error: colors.red.accent3,
                        },
                        dark: {
                                primary: colors.blue.lighten1,
                                secondary: colors.grey.darken4,
                                accent: colors.grey.darken3,
                                error: colors.red.accent3,
                        },
                },
        },
});
