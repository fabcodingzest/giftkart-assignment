import { ReactComponent as RightArrow } from "../assets/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../assets/left-arrow.svg";

function Arrow({ direction, handleClick }) {
  return (
    <button
      className="arrow"
      onClick={handleClick}
      style={direction === "right" ? { right: 0 } : { left: 0 }}>
      {direction === "right" ? <RightArrow /> : <LeftArrow />}
    </button>
  );
}

export default Arrow;
