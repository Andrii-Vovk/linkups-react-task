import Navbar from "../../ui/components/Navbar/Navbar";
import "./index.scss";
import mockup from "../../public/images/phone-mockup.png";
import one from "../../public/images/1.png";
import two from "../../public/images/2.png";
import three from "../../public/images/3.png";
import { FormEvent, useState } from "react";
import { logInRequest, signUpRequest } from "../../core/services/requests";
import { setToken } from "../../core/services/authHandling";

export interface LoginPageProps {}

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e: FormEvent<HTMLFormElement>) {
    e?.preventDefault();

    if (signUpRequest(email, username, password)) {
      let res = await logInRequest(email, password);
      if (res && res.headers.authorization) {
        setToken(res.headers.authorization);
        window.location.href = "/";
      }
    }
  }

  function switchAndClearStates() {
    setIsSignUp(!isSignUp);

    setUsername("");
    setEmail("");
    setPassword("");
  }

  async function handleLogIn(e: FormEvent<HTMLFormElement>) {
    e?.preventDefault();

    let response = await logInRequest(email, password);

    if (response && response.headers.authorization) {
      setToken(response?.headers.authorization);
      window.location.href = "/";
    }
    else alert('Wrong login or password');
  }

  return (
    <>
      <Navbar variant="LoginPage" />
      <div className="login-wrapper">
        <div className="mockup">
          <img src={mockup} alt="phone withs photos" />
          <img className="one" src={one} alt="phone withs photos" />
          <img className="two" src={two} alt="phone withs photos" />
          <img className="three" src={three} alt="phone withs photos" />
        </div>
        <div className="login-form">
          {!isSignUp && (
            <>
              <form action="/" onSubmit={(e) => handleLogIn(e)}>
                <h1>Log In</h1>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="example@mail.com"
                    className="standart-input"
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="Type in..."
                    className="standart-input"
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="input-group">
                  <button className="blue-btn" type="submit">
                    Log In
                  </button>
                </div>
                <div className="sign-up-links">
                  <span className="subtext">Dont have an account?</span>
                  <span
                    onClick={() => switchAndClearStates()}
                    className="pseudolink"
                  >
                    Sign Up
                  </span>
                </div>
              </form>
            </>
          )}

          {isSignUp && (
            <>
              <form action="/" onSubmit={(e) => handleSignUp(e)}>
                <h1>Sign Up</h1>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="example@mail.com"
                    className="standart-input"
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="username">Username</label>
                  <input
                    placeholder="Alex..."
                    className="standart-input"
                    type="username"
                    name="username"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="Type in..."
                    className="standart-input"
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="input-group">
                  <button className="blue-btn" type="submit">
                    Sign Up
                  </button>
                </div>
                <div className="sign-up-links">
                  <span className="subtext">Have an account?</span>
                  <span
                    onClick={() => switchAndClearStates()}
                    className="pseudolink"
                  >
                    Log In
                  </span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
