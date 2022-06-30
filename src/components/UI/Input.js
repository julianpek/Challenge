const Input = props => {
  return (
    <div className={props.className}>
      <label>{props.labelName}</label>
      <br />
      <input
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        placeholder={props.placeholder}
      />
      {props.hasError && (
        <p className={props.paragraphClass}>
          Please enter valid {props.labelName.toLowerCase()}.
        </p>
      )}
    </div>
  );
};

export default Input;