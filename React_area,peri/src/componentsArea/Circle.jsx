const React = require("react");

function Circle() {
  let r = 5;
  let pi = 3.14;
  let a = pi * r * r;
  return <h1>area of circle : {a}</h1>;
}
export default Circle;
