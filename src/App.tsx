import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { ReactElement, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./App.scss";

import 'react-toastify/dist/ReactToastify.css';

import { clearError } from "./core/store/errorSlice";
import { useAppDispatch, useAppSelector } from "./core/store/hooks";
import { clearPopUpError } from "./core/store/postPopUpSlice";
import RouterNav from "./ui/boot/router";

function App(): ReactElement {
  useEffect(() => {
    TimeAgo.addDefaultLocale(en)
  })

  const error = useAppSelector((state) => state.error.error);
  const popUpError = useAppSelector((state) => state.popUp.error);
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
  }, [dispatch, error, popUpError])

  return (
    <div className="App">
      <ToastContainer />
      <RouterNav />
    </div>
  );
}

export default App;
