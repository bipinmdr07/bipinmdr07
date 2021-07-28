import classNames from 'classnames';

type Size = 'tiny' | 'regular' | 'large';

interface SpinnerProps {
  size?: Size;
}

const Spinner = (props: SpinnerProps) => {
  const { size = 'regular' } = props;

  const spinnerClass = classNames({
    circle: true,
    [`circle--${size}`]: !!size,
  });

  return (
    <div className="spinner">
      <div className={spinnerClass}></div>
    </div>
  );
};

export default Spinner;
