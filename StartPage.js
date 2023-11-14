import { onNavigate } from "./app.js";

const StartPage = {
  onNavigate: () => {
    onNavigate("/thank-you");
  },
  render: () => {
    const view = /*html*/ `
      <section class="start-page">
        <h1>Start Page</h1>
        <button class="start-page__button">Go to Thank You Page</button>
      </section>
    `;
    return view;
  },
  addEventListener: () => {
    document.querySelector(".start-page__button").addEventListener("click", StartPage.onNavigate);
  },
};

export default StartPage;
