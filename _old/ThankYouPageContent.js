const ThankYouPageContent = (email) => {
  return /*jsx*/ `
<section class="thank-you-page">
  <div>
  <img src="./assets/images/icon-success.svg" alt="Success icon" />
  <h1> Thanks for subscribing!</h1>
  <p>A confirmation email has been sent to <span id="email">${
    email || savedEmail
  }</span>. Please open it and click the button inside to confirm your subscription.</p>
  </div>
  <button>Dismiss message</button>
</section>
`;
};
export default ThankYouPageContent;
