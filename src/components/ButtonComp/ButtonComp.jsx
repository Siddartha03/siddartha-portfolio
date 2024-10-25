import cx from "classnames";
import "./ButtonComp.scss";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const ButtonComp = ({
  text,
  onClickEvent = () => {},
  className = "",
  isDisabled = false,
  hasLoading = false,
}) => {
  return (
    <button
      className={cx("button", className)}
      onClick={onClickEvent}
      disabled={isDisabled}
    >
      {hasLoading ? (
        <LoadingSpinner
          height="8px"
          size={20}
          progressbarProps={{ style: { color: "#fff" } }}
        />
      ) : (
        text
      )}
    </button>
  );
};
export default ButtonComp;
