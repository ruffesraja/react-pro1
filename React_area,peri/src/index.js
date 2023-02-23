import Area from "./Area";
import Perimeter from "./Perimeter";
const React = require("react");
const ReactDOM = require("react-dom");

ReactDOM.render(
  <div className="section">
    <Area />
    <Perimeter />
  </div>,
  document.getElementById("root")
);
