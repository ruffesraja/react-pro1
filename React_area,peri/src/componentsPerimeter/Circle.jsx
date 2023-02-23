const React = require("react");
function Circle() {
  let r = 6;
  const pi = 3.14;
  let peri = 2 * pi * r;
  return <h1>perimeter of circle : {peri}</h1>;
}
export default Circle;
