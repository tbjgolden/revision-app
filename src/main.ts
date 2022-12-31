import View from "./screens/View.svelte";
import "./home.css";

if (!localStorage.getItem("data")) {
  window.location.href = import.meta.env.BASE_URL + "setup.html";
}

export default new View({
  target: document.getElementById("app"),
});
