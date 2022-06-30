import { useState, useEffect, useCallback } from 'react';

import EditCustomerModal from './components/CustomerModal/EditCustomerModal';
import CustomerList from './components/CustomerList/CustomerList';
import NavBar from './components/Layout/NavBar';
import Container from './components/UI/Container';

function App() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUserEditing, setIsUserEditing] = useState(false);
  const [editCustomerId, setEditCustomerId] = useState('');

  console.log(customers);

  const fetchCustomersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong.');
      }

      const data = await response.json();

      setCustomers(data.customers);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCustomersHandler();
  }, [fetchCustomersHandler]);

  const customerIdHandler = id => {
    setEditCustomerId(id);
  };

  const showEditModalHandler = () => {
    setIsUserEditing(true);
  };

  const closeEditModalHandler = () => {
    setIsUserEditing(false);
  };

  const saveButtonHandler = () => {};

  return (
    <>
      <NavBar />
      <Container>
        {isUserEditing && (
          <EditCustomerModal
            customer={customers}
            backBtn={closeEditModalHandler}
          />
        )}
        {!isLoading && customers.length > 0 && (
          <CustomerList
            customers={customers}
            editBtn={showEditModalHandler}
            customerId={customerIdHandler}
          />
        )}
        {!isLoading && customers.length === 0 && !error && (
          <p>No customers found.</p>
        )}
        {isLoading && <p>Loading customers...</p>}
        {!isLoading && error && <p>{error}</p>}
      </Container>
    </>
  );
}

export default App;
