const StartPageContent = () => {
  return /*jsx*/ `
<section class="start-page">
  <div class="content">
  <h1>Stay updated!</h1>
  <p>Join 60,000+ product managers receiving monthly updates on:</p>
  <ul>
    <li>Product discovery and building what matters</li>
    <li>Measuring to ensure updates are a success</li>
    <li>And much more!</li>
  </ul>
  <form id="subscribe-form">
    <label for="email">Email address</label>
    <input type="email" id="email" placeholder="email@company.com" />
    <button id="subscribe-button" disabled type="button">Subscribe to monthly newsletter</button>
  </form>
  </div>
  <div class="image">
    <img src="./assets/images/illustration-sign-up-desktop.svg" alt="Sign up illustration" class="desktop" />
    <img src="./assets/images/illustration-sign-up-mobile.svg" alt="Sign up illustration" class="mobile" />
  </div>
</section>
`;
};

export default StartPageContent;
