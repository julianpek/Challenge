import { useEffect } from 'react';

import Input from '../UI/Input';
import Button from '../UI/Button';
import Select from '../UI/Select';
import Modal from '../UI/Modal';

import useInput from '../../hooks/use-input';

import classes from './EditModal.module.css';

import states from '../../data/states';
import provinces from '../../data/provinces';
import channels from '../../data/channels';

const EditModal = props => {
  const {
    value: enteredName,
    setEnteredValue: setEnteredName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    setEnteredValue: setEnteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput(value => {
    const regex = /\S+@\S+\.\S+/;
    const result = regex.test(value);
    return result;
  });

  const {
    value: enteredChannel,
    setEnteredValue: setEnteredChannel,
    valueIsValid: channelIsValid,
    hasError: channelHasError,
    valueChangeHandler: channelChangeHandler,
    valueBlurHandler: channelBlurHandler,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredAddress,
    setEnteredValue: setEnteredAddress,
    valueIsValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    valueBlurHandler: addressBlurHandler,
  } = useInput(value => value);

  const {
    value: enteredPostalCode,
    setEnteredValue: setEnteredPostalCode,
    valueIsValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    valueBlurHandler: postalCodeBlurHandler,
  } = useInput(value => {
    const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    const result = regex.test(value);
    return result;
  });

  const {
    value: enteredCity,
    setEnteredValue: setEnteredCity,
    valueIsValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredProvince,
    setEnteredValue: setEnteredProvince,
    valueIsValid: provinceIsValid,
    hasError: provinceHasError,
    valueChangeHandler: provinceChangeHandler,
    valueBlurHandler: provinceBlurHandler,
  } = useInput(value => value.trim() !== '');

  let isFormValid = false;

  if (
    nameIsValid &&
    emailIsValid &&
    channelIsValid &&
    addressIsValid &&
    postalCodeIsValid &&
    cityIsValid &&
    provinceIsValid
  ) {
    isFormValid = true;
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    const editedData = {
      id: props.customer.id,
      name: enteredName,
      email: enteredEmail,
      channel: enteredChannel,
      address: enteredAddress,
      postal: enteredPostalCode,
      city: enteredCity,
      province: enteredProvince,
      country: props.customer.country,
    };

    const payLoad = JSON.stringify(editedData);

    console.log(payLoad);

    props.backBtn(false);
  };

  useEffect(() => {
    if (props.editing) {
      setEnteredName(props.customer.name);
      setEnteredEmail(props.customer.email);
      setEnteredAddress(props.customer.address);
      setEnteredPostalCode(props.customer.postal);
      setEnteredCity(props.customer.city);
      setEnteredChannel(props.customer.channel);
      setEnteredProvince(props.customer.province);
    }
  }, []);

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
    <Modal>
      <div className={classes.form_container}>
        <form onSubmit={formSubmitHandler}>
          <Input
            className={nameClasses}
            labelName={'Name'}
            type={'text'}
            id={'name'}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            hasError={nameHasError}
            paragraphClass={classes.error_text}
          />
          <Input
            className={emailClasses}
            labelName={'Email'}
            type={'email'}
            id={'email'}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            hasError={emailHasError}
            paragraphClass={classes.error_text}
          />
          <Input
            className={addressClasses}
            labelName={'Address'}
            type={'text'}
            id={'address'}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            value={enteredAddress}
            hasError={addressHasError}
            paragraphClass={classes.error_text}
          />
          <Input
            className={postalCodeClasses}
            labelName={props.canadian ? 'Postal Code' : 'Zip Code'}
            type={'text'}
            id={props.canadian ? 'postal-code' : 'zip-code'}
            onChange={postalCodeChangeHandler}
            onBlur={postalCodeBlurHandler}
            value={enteredPostalCode}
            hasError={postalCodeHasError}
            paragraphClass={classes.error_text}
          />
          <Input
            className={cityClasses}
            labelName={'City'}
            type={'text'}
            id={'city'}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            value={enteredCity}
            hasError={cityHasError}
            paragraphClass={classes.error_text}
          />
          <Select
            className={provinceClasses}
            labelName={props.canadian ? 'Province' : 'State'}
            key={props.canadian ? 'province' : 'state'}
            id={props.canadian ? 'province' : 'state'}
            value={enteredProvince}
            onChange={provinceChangeHandler}
            onBlur={provinceBlurHandler}
            hasError={provinceHasError}
            paragraphClass={classes.error_text}
            options={props.canadian ? provinces : states}
            customer={props.customer.province}
          />
          <Select
            className={channelClasses}
            labelName={'Channel'}
            key={'channel'}
            id={'channel'}
            value={enteredChannel}
            onChange={channelChangeHandler}
            onBlur={channelBlurHandler}
            hasError={channelHasError}
            paragraphClass={classes.error_text}
            options={channels}
            customer={props.customer.channel}
          />
          <div className={classes.button_container}>
            <Button onClick={props.backBtn}>Back</Button>
            <Button disabled={!isFormValid} type='save' isGreen={true}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditModal;
