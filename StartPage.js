import { onNavigate } from "./app.js";
import StartPageContent from "./StartPageContent.js";

const StartPage = {
  render: () => StartPageContent(),
  /* */
  onNavigate: () => {
    onNavigate("/thank-you");
  },
  addEventListener: () => {
    document.querySelector("#subscribe-button").addEventListener("click", {
      handleEvent: () => {
        const email = StartPage.getEmail();
        StartPage.saveEmail(email);
        onNavigate("/thank-you", email);
      },
    });
    document.querySelector("#email").addEventListener("input", {
      handleEvent: () => {
        const email = StartPage.getEmail();
        if (StartPage.validateEmail(email)) {
          document.querySelector("#subscribe-button").disabled = false;
        } else {
          document.querySelector("#subscribe-button").disabled = true;
        }
      },
    });
    document.querySelector("#subscribe-form").addEventListener("submit", {
      handleEvent: (event) => {
        StartPage.handleFormSubmit(event);
        StartPage.saveEmail(StartPage.getEmail());
      },
    });
  },
  validateEmail: (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  },
  getEmail: () => {
    return document.getElementById("email").value;
  },
  handleFormSubmit: (event) => {
    event.preventDefault();
    const email = StartPage.getEmail();
    onNavigate("/thank-you", email);
  },
  saveEmail: (email) => {
    localStorage.setItem("email", email);
  },
};

export default StartPage;
