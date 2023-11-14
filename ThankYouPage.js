const ThankYouPage = {
  render: (email) => {
    const view = /*html*/ `
      <section class="thank-you-page">
        <h1> Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <span id="email">${email}</span>. Please open it and click the button inside to confirm your subscription.</p>
      </section>
    `;
    return view;
  },
};

export default ThankYouPage;
