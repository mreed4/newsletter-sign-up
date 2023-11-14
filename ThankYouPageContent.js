const ThankYouPageContent = (email) => /*jsx*/ `
<section class="thank-you-page">
  <h1> Thanks for subscribing!</h1>
  <p>A confirmation email has been sent to <span id="email">${
    email || savedEmail
  }</span>. Please open it and click the button inside to confirm your subscription.</p>
  <button>Dismiss message</button>
</section>
`;
export default ThankYouPageContent;
