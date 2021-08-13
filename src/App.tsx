import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { ReactElement, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./App.scss";

import 'react-toastify/dist/ReactToastify.css';

import { clearLoginError } from "./core/store/authSlice/authSlice";
import { clearError } from "./core/store/errorSlice/errorSlice";
import { useAppDispatch, useAppSelector } from "./core/store/hooks";
import { clearPopUpError } from "./core/store/postPopUpSlice/postPopUpSlice";
import RouterNav from "./ui/boot/router";

function App(): ReactElement {
  useEffect(() => {
    TimeAgo.addDefaultLocale(en)
  }, [])

  const error = useAppSelector((state) => state.error.error);
  const popUpError = useAppSelector((state) => state.popUp.error);
  const loginError = useAppSelector((state) => state.popUp.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(error) {
      toast.error(error);
      dispatch(clearError());
    }
    if(popUpError) {
      toast.error(popUpError);
      dispatch(clearPopUpError());
    }
    if(loginError) {
      toast.error(loginError);
      dispatch(clearLoginError());
    }
  }, [dispatch, error, popUpError, loginError])

  return (
    <div className="App">
      <ToastContainer />
      <RouterNav />
    </div>
  );
}

export default App;
