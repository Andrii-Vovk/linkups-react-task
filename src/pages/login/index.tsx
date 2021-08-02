import Navbar from "../../ui/components/Navbar/Navbar";
import "./index.scss";
import mockup from "../../public/images/phone-mockup.png";
import one from "../../public/images/1.png";
import two from "../../public/images/2.png";
import three from "../../public/images/3.png";

export interface LoginPageProps {}

const LoginPage = () => {
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
          <form action="/">
            <div className="input-group">
              <label htmlFor="login">Login</label>
              <input placeholder="Login..." className="standart-input" type="text" name="login" id="login" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input placeholder="Password..." className="standart-input" type="text" name="password" id="password" />
            </div>
            <button className="blue-btn" type="submit">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
