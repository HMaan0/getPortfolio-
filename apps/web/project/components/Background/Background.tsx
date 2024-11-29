import components from "../../../component";
import Eyes from "./Eyes";
import Gradient from "./Gradient";
import { GridPatternLinearGradient } from "./Grids";

const Background = () => {
  return (
    <>
      {components.background.gradient && <Gradient />}
      {components.background.eyes && <Eyes />}
      {components.background.grid && <GridPatternLinearGradient />}
    </>
  );
};

export default Background;
