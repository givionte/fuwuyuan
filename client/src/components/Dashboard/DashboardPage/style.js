import styled from "styled-components";
import Button from "../../../theme/Button";

export const DashboardGrid = styled.div`
  z-index: 15;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  row-gap: 20px;
  align-items: center;
  justify-items: center;
  margin-top: 0.8em;
  margin-bottom: 0.8em;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-device-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }
`;

export const AssignmentItemContainer = styled.div`
  z-index: 15;
  width: 90%;
  height: 306px;
  max-width: 1100px;
  margin: auto;
  justify-self: stretch;
  align-self: center;
  background-color: ${props => props.theme.neutralLight};
  border-radius: 24px;
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media only screen and (max-device-width: 375px) {
    width: 330px;
  }
  @media only screen and (min-width: 1000px) {
    width: 100%;
  }
`;

export const Welcome = styled.h2`
  margin-block-start: 0.5em;
  margin-block-end: 0.83em;
  margin-inline-start: 0.5em;
  margin-inline-end: 0px;
`;

export const Title = styled.h3`
  margin-inline-start: 2em;
  margin-inline-end: 2em;
`;

export const AssignmentDiv = styled.div`
  margin-inline-start: 5em;
  margin-inline-end: 5em;
`;

export const Overdue = styled.h4`
  color: ${props => props.theme.error};
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
`;

export const OverdueButton = styled.button`
  display: table-cell;
  margin: 0 auto;
  z-index: 50;
  vertical-align: middle;
  height: 40px;
  width: 40px;
  max-width: 40px;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border-style: none;
  color: white;
  background-color: ${props => props.theme.error};
  border-radius: 100%;
  text-align: center;
  padding: 0;
  transition: all 0.25s ease-in-out;
  transform: scale(1) translateZ(0);
  :hover {
    filter: brightness(105%);
    background: #1ab2b2;
    transform: scale(1.1);
  }
`;

export const DueButton = styled.button`
  display: table-cell;
  margin: 0 auto;
  z-index: 50;
  vertical-align: middle;
  height: 40px;
  width: 40px;
  max-width: 40px;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border-style: none;
  color: white;
  background-color: ${props => props.theme.success};
  border-radius: 100%;
  text-align: center;
  padding: 0;
  transition: all 0.25s ease-in-out;
  transform: scale(1) translateZ(0);
  :hover {
    filter: brightness(105%);
    background: #1ab2b2;
    transform: scale(1.1);
  }
`;

export const DeckGrid = styled.div`
  z-index: 15;
  display: grid;
  max-width: 1100px;
  grid-template-columns: 720px 1fr;
  grid-template-rows: 560px;
  grid-gap: 5px;
  margin: auto;
  @media only screen and (max-width: 770px) {
    grid-template-rows: 560px 560px 560px;
  }
  @media only screen and (max-width: 1000px) {
    display: inherit;
    grid-template-columns: 720px;
  }
`;

export const GridCol = styled.div`
  grid-column: 1 / 2;
  @media only screen and (max-width: 770px) {
    justify-self: center;
  }
  @media only screen and (max-width: 1000px) {
    grid-column: 1 / 2;
  }
`;

export const GridButtonCol = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  place-self: center;
  @media only screen and (max-width: 770px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
  @media only screen and (max-width: 1000px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

export const DividerBack = styled.div`
  background-color: ${props => props.theme.neutralLight};
  background-clip: border-box;
  width: 100%;
  margin: auto;
  display: inline-block;
`;

export const Headers = styled.h2`
  max-width: 1100px;
  margin: auto;
  padding: 0.5em;
  @media only screen and (max-width: 770px) {
    text-align: center;
  }
`;

export const Hr = styled.hr`
  padding: 0;
  margin: 0;
  border: none;
  height: 2px;
  width: 100%;
  background-image: -webkit-linear-gradient(left, #c51d1d, #faf9f9);
`;

export const MoreAssignmentsButton = styled(Button)`
  margin: auto;
  display: block;
  width: 205px;
  border: 2px solid ${props => props.theme.primaryDark};
  a {
    color: ${props => props.theme.text};
  }
  :hover {
    a {
      color: white;
    }
  }
`;

export const MoreButton = styled(Button)`
  margin: auto;
  display: block;
  width: 205px;
  border: 2px solid ${props => props.theme.primaryDark};
  a {
    color: ${props => props.theme.text};
  }
  :hover {
    a {
      color: white;
    }
  }
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const LargeMoreButton = styled(Button)`
  display: table-cell;
  margin: 0 auto;
  z-index: 50;
  vertical-align: middle;
  height: 205px;
  width: 205px;
  max-width: 205px;
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border-style: none;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.secondaryLight};
  border-radius: 100%;
  border: 2px solid ${props => props.theme.secondary};
  text-align: center;
  padding: 0;
  transition: all 0.25s ease-in-out;
  transform: scale(1) translateZ(0);
  :hover {
    filter: brightness(105%);
    background: ${props => props.theme.success};
    transform: scale(1.1);
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const LikedIcon = styled.img`
  width: 28px;
  height: 28px;
`;