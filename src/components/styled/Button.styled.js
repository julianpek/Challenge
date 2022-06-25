import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 2px solid blue;
  color: blue;
  margin: 0 1reml;
  padding: 0.25em 1em;
  font-size: 2rem;
  margin: 2rem;

  &&:hover {
    transition: 0.3s;
    background: blue;
    color: white;
  }
`;

export default Button;