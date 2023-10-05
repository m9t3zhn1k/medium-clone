import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { AuthState } from "@/store/modules/auth";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    auth: AuthState;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
