import Button from './UI/Button';
import useInput from '../hooks/use-input';

import classes from './EditCustomer.module.css';

const EditCustomer = () => {
  const {
    value: enteredName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(value => {
    const regex = /\S+@\S+\.\S+/;
    const result = regex.test(value);
    return result;
  });

  const {
    value: enteredChannel,
    valueIsValid: channelIsValid,
    hasError: channelHasError,
    valueChangeHandler: channelChangeHandler,
    valueBlurHandler: channelBlurHandler,
    reset: resetChannel,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredAddress,
    valueIsValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    valueBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput(value => value);

  const {
    value: enteredPostalCode,
    valueIsValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    valueBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCode,
  } = useInput(value => {
    const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    const result = regex.test(value);
    return result;
  });

  const {
    value: enteredCity,
    valueIsValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredProvince,
    valueIsValid: provinceIsValid,
    hasError: provinceHasError,
    valueChangeHandler: provinceChangeHandler,
    valueBlurHandler: provinceBlurHandler,
    reset: resetProvince,
  } = useInput(value => value.trim() !== '');

  let isFormValid = false;

  if (
    nameIsValid &&
    emailIsValid &&
    channelIsValid &&
    addressIsValid &&
    postalCodeIsValid &&
    cityIsValid
  ) {
    isFormValid = true;
  }

  const formSubmitHandler = e => {
    e.preventDefault();
  };

  const nameClasses = nameHasError
    ? `${classes.form_control__invalid}`
    : `${classes.form_control}`;
  const emailClasses = emailHasError
    ? `${classes.form_control__invalid}`
    : `${classes.form_control}`;
  const channelClasses = channelHasError
    ? `${classes.form_control__invalid}`
    : `${classes.form_control}`;
  const addressClasses = addressHasError
    ? `${classes.form_control__invalid}`
    : `${classes.form_control}`;
  const postalCodeClasses = postalCodeHasError
    ? `${classes.form_control__invalid}`
    : `${classes.form_control}`;
  const cityClasses = cityHasError
    ? `${classes.form_control__invalid}`
    : `${classes.form_control}`;
  const provinceClasses = provinceHasError
    ? `${classes.form_control__invalid}`
    : `${classes.form_control}`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameClasses}>
        <label>Name</label>
        <br />
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameHasError && (
          <p className={classes.error_text}>Please enter valid name.</p>
        )}
      </div>
      <div className={emailClasses}>
        <label>Email</label>
        <br />
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className={classes.error_text}>Please enter valid email.</p>
        )}
      </div>
      <div className={channelClasses}>
        <label>Channel</label>
        <br />
        <input
          type='text'
          id='channel'
          onChange={channelChangeHandler}
          onBlur={channelBlurHandler}
          value={enteredChannel}
        />
        {channelHasError && (
          <p className={classes.error_text}>Please enter valid channel.</p>
        )}
      </div>
      <div className={addressClasses}>
        <label>Address</label>
        <br />
        <input
          type='text'
          id='address'
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
          value={enteredAddress}
        />
        {addressHasError && (
          <p className={classes.error_text}>Please enter valid address.</p>
        )}
      </div>
      <div className={postalCodeClasses}>
        <label>Postal Code</label>
        <br />
        <input
          type='text'
          id='postal-code'
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
          value={enteredPostalCode}
        />
        {postalCodeHasError && (
          <p className={classes.error_text}>Please enter valid postal code.</p>
        )}
      </div>
      <div className={cityClasses}>
        <label>City</label>
        <br />
        <input
          type='text'
          id='city'
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {cityHasError && (
          <p className={classes.error_text}>Please enter valid city.</p>
        )}
      </div>
      <div className={provinceClasses}>
        <label>Province</label>
        <br />
        <select onChange={provinceChangeHandler} onBlur={provinceBlurHandler}>
          <option value='alberta'>Alberta</option>
          <option value='british columbia'>British Columbia</option>
          <option value='manitoba'>Manitoba</option>
          <option value='new-brunswick'>New Brunswick</option>
          <option value='newfoundland-and-labrador'>
            Newfoundland and Labrador
          </option>
          <option value='nova-scotia'>Nova Scotia</option>
          <option value='ontario'>Ontario</option>
          <option value='prince-edward-island'>Prince Edward Island</option>
          <option value='quebec'>Quebec</option>
          <option value='saskatchewan'>Saksatchewan</option>
        </select>
      </div>
      <div className={classes.button_container}>
        <Button>Back</Button>
        <Button disabled={!isFormValid} type='save'>
          Save
        </Button>
      </div>
    </form>
  );
};

export default EditCustomer;
