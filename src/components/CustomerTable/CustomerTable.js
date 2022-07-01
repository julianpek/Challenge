import { useState } from 'react';

import EditModal from '../EditModal/EditModal';
import CustomerRow from './CustomerRow';

import classes from './CustomerTable.module.css';

const CustomerTable = props => {
  const [isEditing, setIsEditing] = useState(false);
  const [customer, setCustomer] = useState();

  const onEdit = data => {
    setIsEditing(true);
    setCustomer(data);
  };

  console.log(customer);

  const onClose = () => {
    setIsEditing(false);
  };

  const mappedCustomers = props.customers.map((customer, i) => (
    <CustomerRow
      key={i}
      id={customer.id}
      customerName={customer.name}
      customerEmail={customer.email}
      onClick={() => onEdit(customer)}
    />
  ));

  return (
    <>
      {isEditing && (
        <EditModal backBtn={onClose} customer={customer} editing={isEditing} />
      )}
      <div className={classes.container}>
        <h1>Customers</h1>
      </div>
      <div className={classes.container}>
        <table cellSpacing='0' cellPadding='0'>
          <tbody>
            <tr className={classes.tr_titles}>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
            {mappedCustomers}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerTable;
