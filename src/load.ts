import "./global.css";

let urlData = new URLSearchParams(location.search).get("x");
if (urlData) {
  localStorage.setItem("data", decodeURIComponent(atob(urlData)));
}
window.location.href = import.meta.env.BASE_URL;

export default {};
