import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    auth: AuthState;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

export interface AuthState {
  isSubmitting: boolean;
}
