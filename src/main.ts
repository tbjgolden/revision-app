import View from "./screens/View.svelte";

if (!localStorage.getItem("data")) {
  window.location.href = import.meta.env.BASE_URL + "setup.html";
}

export default new View({
  target: document.getElementById("app"),
});
