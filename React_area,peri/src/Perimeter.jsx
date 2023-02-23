import Circle from "./componentsPerimeter/Circle";
import Square from "./componentsPerimeter/Square";
import RectAngle from "./componentsPerimeter/RectAngle";
const React = require("react");

function Perimeter() {
  return (
    <div className="Perimeter">
      <Circle />
      <Square />
      <RectAngle />
    </div>
  );
}
export default Perimeter;
