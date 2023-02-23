import Circle from "./componentsArea/Circle";
import Square from "./componentsArea/Square";
import RectAngle from "./componentsArea/RectAngle";
const React = require("react");

function Area() {
  return (
    <div className="Area">
      <Circle />
      <Square />
      <RectAngle />
    </div>
  );
}
export default Area;
