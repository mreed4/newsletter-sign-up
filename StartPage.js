import { onNavigate } from "./app.js";

const StartPage = {
  onNavigate: () => {
    onNavigate("/thank-you");
  },
  render: () => {
    const view = /*html*/ `
      <section class="start-page">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="email@company.com" />
        <button class="subscribe-button">Subscribe to monthly newsletter</button>
      </section>
    `;
    return view;
  },
  addEventListener: () => {
    document.querySelector(".subscribe-button").addEventListener("click", {
      handleEvent: () => {
        const email = StartPage.getEmail();
        onNavigate("/thank-you", email);
      },
    });
  },
  getEmail: () => {
    return document.getElementById("email").value;
  },
};

export default StartPage;
