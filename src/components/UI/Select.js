const Select = props => {
  const options = props.options;

  const mappedData = options.map(value => (
    <option key={value} id={value} value={value}>
      {value}
    </option>
  ));

  return (
    <div className={props.className}>
      <label>{props.labelName}</label>
      <br />
      <select onChange={props.onChange} onBlur={props.onBlur}>
        {mappedData}
      </select>
      {props.hasError && (
        <p className={props.paragraphClass}>
          Please select a {props.labelName.toLowerCase()}.
        </p>
      )}
    </div>
  );
};

export default Select;
