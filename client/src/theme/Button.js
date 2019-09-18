import styled from "styled-components";

const Button = styled.button`
  height: 35px;
  width: 105px;
  background: none;
  border-radius: 4px;
  border: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.text};
  margin: 0.2em;
  padding: 0.25em 1em;
  font-size: 12px;
  transition: all 0.15s ease-in-out;
  transform: scale(1) translateZ(0);
  display: inline-table;
  cursor: pointer;
  :hover {
    color: white;
    background: #1ab2b2;
    transform: scale(1.05);
  }
  :disabled {
    color: rgba(35, 56, 65, 0.5);
    border: 2px solid rgba(35, 56, 65, 0.3);
  }
`;

export default Button;
