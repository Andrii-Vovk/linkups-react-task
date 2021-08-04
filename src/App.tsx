import { ReactElement } from "react";
import "./App.scss";

import RouterNav from "./ui/boot/router";

function App(): ReactElement {
  return (
    <div className="App">
      <RouterNav />
    </div>
  );
}

export default App;
