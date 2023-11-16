import ThankYouPageContent from "./ThankYouPageContent.js";

const ThankYouPage = {
  render: (email = "test@test.com") => ThankYouPageContent(email),
  /* */
  addEventListener: () => {
    window.addEventListener("DOMContentLoaded", () => {
      ThankYouPage.loadEmail();
      const email = document.getElementById("email");
      if (!email.innerHTML && ThankYouPage.loadEmail()) {
        email.innerHTML = ThankYouPage.loadEmail();
      }
    });
  },
  loadEmail: () => {
    const savedEmail = localStorage.getItem("email");
    return savedEmail;
  },
};

export default ThankYouPage;
