import classes from './Button.module.css';

const Button = props => {
  return (
    <button
      disabled={props.disabled}
      type={props.type}
      value={props.value}
      className={props.isGreen ? classes.button_green : classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
