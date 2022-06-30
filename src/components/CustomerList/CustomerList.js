import CustomerRow from './CustomerRow';

import classes from './CustomerList.module.css';

const customers = props => {
  const customerList = props.customers.map(customer => (
    <CustomerRow
      key={customer.id}
      id={customer.id}
      customerName={customer.name}
      customerEmail={customer.email}
      editBtn={props.editBtn}
      editCustomerId={props.editCustomerId}
      customerId={props.customerId}
    />
  ));

  return (
    <>
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
            {customerList}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default customers;
