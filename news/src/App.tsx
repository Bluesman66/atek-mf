import s from "./index.module.scss";

import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div className={s.container}>
    <div>Name: news</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
