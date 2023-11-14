/* https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c */

import StartPage from "./StartPage.js";
import ThankYouPage from "./ThankYouPage.js";

const home = `
  <section class="start-page">
    <h1>Start Page</h1>
    <button class="start-page__button" onclick="onNavigate('/thank-you')">Go to Thank You Page</button>
    </section>`;

const routes = {
  "/": StartPage,
  "/thank-you": ThankYouPage,
};

const root = document.getElementById("root");
root.innerHTML = routes[window.location.pathname];

const router = () => {
  const request = window.location.pathname;
  root.innerHTML = routes[request].render();
  routes[request] === StartPage ? StartPage.addEventListener() : null;
};

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = routes[pathname].render();
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
window.addEventListener("popstate", router);

export { onNavigate };
