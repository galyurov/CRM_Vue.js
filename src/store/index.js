import Vue from "vue";
import Vuex from "vuex";
import calendar from "@/store/modules/calendar";
import inventory from "@/store/modules/inventory";
import entryForm from "@/store/modules/entryForm";
import newEstimate from "@/store/modules/newEstimate";

Vue.use(Vuex);

export default new Vuex.Store({
  name: "store",
  state: {
    auth: false,
  },
  modules: {
    calendar,
    inventory,
    entryForm,
    newEstimate
  },
});
