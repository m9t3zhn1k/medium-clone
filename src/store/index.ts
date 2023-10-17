import Vuex from "vuex";
import auth from "@/store/modules/auth";
import feed from "@/store/modules/feed";
import tag from "@/store/modules/tag";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    tag,
  },
});
