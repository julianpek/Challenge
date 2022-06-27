import classes from './Button.module.css';

const Button = props => {
  return (
    <button
      disabled={props.disabled}
      type={props.type}
      value={props.value}
      className={classes.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
