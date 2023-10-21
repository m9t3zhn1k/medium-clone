import Vuex from "vuex";
import auth from "@/store/modules/auth";
import feed from "@/store/modules/feed";
import home from "@/store/modules/home";
import tag from "@/store/modules/tag";
import article from "@/store/modules/article";
import articleNew from "@/store/modules/article-new";
import articleEdit from "@/store/modules/article-edit";

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
    articleNew,
    articleEdit,
  },
});
