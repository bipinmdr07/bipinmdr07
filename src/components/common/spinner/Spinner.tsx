import React from "react";
import classNames from "classnames";

type Size = "tiny" | "regular" | "large";

interface SpinnerProps {
  size?: string;
}

const Spinner = (props: SpinnerProps) => {
  const { size = "regular" } = props;

  const spinnerClass = classNames({
    ["circle"]: true,
    ["circle--regular"]: size === "regular",
    ["circle--tiny"]: size === "tiny",
    ["circle--large"]: size === "large",
  });

  return (
    <div className="spinner">
      <div className={spinnerClass}></div>
    </div>
  );
};

export default Spinner;
