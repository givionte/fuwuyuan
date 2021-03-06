import styled from "styled-components";

export const Box = styled.form`
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: ${props => props.theme.neutralLight};
  border-radius: 24px;
  text-align: center;
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  :hover {
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15),
      0 6px 6px rgba(19, 129, 129, 0.125);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15),
      0 6px 6px rgba(19, 129, 129, 0.125);
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 600;
`;
