import Button from '../UI/Button';

import classes from './CustomerRow.module.css';

const CustomerRow = props => {
  const buttonClickHandler = () => {
    props.editBtn();
    props.customerId(props.id);
  };

  return (
    <>
      <tr className={classes.tr}>
        <td>{props.customerName}</td>
        <td>{props.customerEmail}</td>
        <td>
          <Button onClick={buttonClickHandler}>Edit</Button>
        </td>
      </tr>
    </>
  );
};

export default CustomerRow;
