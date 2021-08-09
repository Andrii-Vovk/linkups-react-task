import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { ReactElement, useEffect } from "react";
import "./App.scss";

import RouterNav from "./ui/boot/router";

function App(): ReactElement {
  useEffect(() => {
    TimeAgo.addDefaultLocale(en)
  })


  return (
    <div className="App">
      <RouterNav />
    </div>
  );
}

export default App;
