import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

export default function ThankYouPage() {
  const { email } = useContext(AppContext);

  return (
    <section className="thank-you-page">
      <div>
        <img src="/img/icon-success.svg" alt="Success icon" />
        <h1> Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <span id="email">{email}</span>. Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <button>Dismiss message</button>
    </section>
  );
}
