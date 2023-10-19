import Vuex from "vuex";
import auth from "@/store/modules/auth";
import feed from "@/store/modules/feed";
import home from "@/store/modules/home";
import tag from "@/store/modules/tag";
import article from "@/store/modules/article";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    tag,
    home,
    article,
  },
});
