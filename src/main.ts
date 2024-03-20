import { defineCustomElement } from "vue";
import showHello from "./components/showHello.ce.vue";
const defineShowHello = defineCustomElement<any>(showHello);

export { defineShowHello };

// 註冊組件的函式
export function register() {
  customElements.define("show-hello", defineShowHello);
}
