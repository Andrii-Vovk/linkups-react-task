import "./index.scss";
import { Formik, Form } from "formik";
import { useState } from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";

import { logInRequest, signUpRequest } from "../../core/services/requests";
import { setToken } from "../../core/store/authSlice";
import { useAppDispatch } from "../../core/store/hooks";
import one from "../../public/images/1.png";
import two from "../../public/images/2.png";
import three from "../../public/images/3.png";
import mockup from "../../public/images/phone-mockup.png";
import Navbar from "../../ui/components/Navbar/Navbar";
import FormInput from "../../ui/components/common/input/FormInput";
import buttons from "../../ui/style/buttons.module.scss";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please, enter your email"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(32, "Too Long!")
    .required("Please, enter your password"),
});

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please, enter your email"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(32, "Too Long!")
    .required("Please, enter your password"),
  username: Yup.string()
    .min(3, "Too Short!")
    .max(16, "Too Long!")
    .required("Please, enter your username")
    .matches(/^[a-z0-9_-]{3,16}$/, "Username contains invalid symbols!"),
});

interface LoginInitialValue {
  email: string;
  password: string;
}

interface SignUpInitialValue extends LoginInitialValue {
  username: string;
}

const LoginPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const history = useHistory();

  const dispatch = useAppDispatch();

  function switchAndClearStates() {
    setIsSignUp(!isSignUp);
  }

  const initialValues: LoginInitialValue = {
    email: "",
    password: "",
  };

  const signUpinitialValues: SignUpInitialValue = {
    email: "",
    password: "",
    username: "",
  };

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
              <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                validateOnChange
                validateOnBlur
                onSubmit={async (values) => {
                  const response = await logInRequest(
                    values.email,
                    values.password
                  );

                  if (response && response.headers.authorization) {
                    dispatch(setToken(response?.headers.authorization));
                  }
                }}
              >
                {() => (
                  <Form>
                    <h1>Log In</h1>

                    <FormInput
                      type="email"
                      labelText="Email"
                      placeholder="email@mail.com"
                      name="email"
                    />
                    <FormInput
                      type="password"
                      labelText="Password"
                      placeholder="Your password"
                      name="password"
                    />

                    <button className={buttons.blueBtn} type="submit">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>

              <div className="sign-up-links">
                <span className="subtext">Dont have an account?</span>
                <span
                  onClick={() => switchAndClearStates()}
                  className="pseudolink"
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => switchAndClearStates()}
                >
                  Sign Up
                </span>
              </div>
            </>
          )}

          {isSignUp && (
            <>
              <Formik
                initialValues={signUpinitialValues}
                validationSchema={SignUpSchema}
                validateOnChange
                validateOnBlur
                onSubmit={async (values) => {
                  let res = await signUpRequest(
                    values.email,
                    values.username,
                    values.password
                  );
                  if (res) {
                    res = await logInRequest(values.email, values.password);
                    if (res && res.headers.authorization) {
                      dispatch(setToken(res.headers.authorization));
                      history.push('/');
                    }
                  }
                }}
              >
                {() => (
                  <Form>
                    <h1>Sign Up</h1>

                    <FormInput
                      type="email"
                      labelText="Email"
                      placeholder="email@mail.com"
                      name="email"
                    />
                    <FormInput
                      type="text"
                      labelText="Username"
                      placeholder="Your password"
                      name="username"
                    />
                    <FormInput
                      type="password"
                      labelText="Password"
                      placeholder="Alex..."
                      name="password"
                    />

                    <button className={buttons.blueBtn} type="submit">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>

              <div className="sign-up-links">
                <span className="subtext">Already have an account?</span>
                <span
                  onClick={() => switchAndClearStates()}
                  className="pseudolink"
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => switchAndClearStates()}
                >
                  Log In
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
