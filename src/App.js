import EditCustomer from './components/EditCustomer';
import NavBar from './components/Layout/NavBar';
import Wrapper from './components/UI/Wrapper';

function App() {
  return (
    <>
      <NavBar />
      <Wrapper>
        <EditCustomer />
      </Wrapper>
    </>
  );
}

export default App;
