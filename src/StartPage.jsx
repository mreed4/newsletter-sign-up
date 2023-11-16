import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router";

export default function StartPage() {
  const { setEmail, email } = useContext(AppContext);
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/thank-you");
  }

  return (
    <section className="start-page">
      <div className="content">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form id="subscribe-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="email@company.com" onChange={handleEmailChange} value={email} />
          <button id="subscribe-button" disabled={!email} type="button">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div className="image">
        <img src="/img/illustration-sign-up-desktop.svg" alt="Sign up illustration" className="desktop" />
        <img src="/img/illustration-sign-up-mobile.svg" alt="Sign up illustration" className="mobile" />
      </div>
    </section>
  );
}
