/* https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c */

import StartPage from "./StartPage.js";
import ThankYouPage from "./ThankYouPage.js";

const routes = {
  "/": StartPage,
  "/thank-you": ThankYouPage,
};

const root = document.getElementById("root");

const router = () => {
  const request = window.location.pathname;
  root.innerHTML = routes[request]?.render();
  addEventListeners();
};

const addEventListeners = () => {
  const request = window.location.pathname;
  if (routes[request].addEventListener) {
    routes[request].addEventListener();
  }
};

const onNavigate = (pathname, data) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = routes[pathname].render(data);
};

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);

export { onNavigate };
