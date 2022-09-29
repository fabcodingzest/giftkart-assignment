import { ReactComponent as RightArrow } from "../assets/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../assets/left-arrow.svg";
import { debounce } from "../utilities/debounce";

function Arrow({ direction, handleClick }) {
  return (
    <button
      className="arrow"
      onClick={debounce(handleClick, 300)}
      style={direction === "right" ? { right: 0 } : { left: 0 }}>
      {direction === "right" ? <RightArrow /> : <LeftArrow />}
    </button>
  );
}

export default Arrow;
