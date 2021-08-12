import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { ReactElement, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./App.scss";

import { useAppSelector } from "./core/store/hooks";

import 'react-toastify/dist/ReactToastify.css';

import RouterNav from "./ui/boot/router";

function App(): ReactElement {
  useEffect(() => {
    TimeAgo.addDefaultLocale(en)
  })

  const error = useAppSelector((state) => state.error.error);

  useEffect(() => {
    if(error) {
      toast.error(error);
    }
  }, [error])

  return (
    <div className="App">
      <ToastContainer />
      <RouterNav />
    </div>
  );
}

export default App;
