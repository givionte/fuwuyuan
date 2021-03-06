import styled from "styled-components";
import Button from "../../../theme/Button";

export const Container = styled.div`
  z-index: 10;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Header = styled.div`
  background-color: ${props => props.theme.neutralLight};
  background-clip: border-box;
  width: 100%;
  margin: auto auto 5px auto;
  display: inline-block;
`;

export const SubTitle = styled.h2`
  margin: 0;
  padding: 0.2em 0px 0.2em 4px;
  @media only screen and (max-width: 675px) {
    -ms-flex-item-align: end;
    align-self: flex-end;
  }
`;

export const Field = styled.h4`
  margin-left: 10px;
`;

export const SubMenu = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const CloseSpan = styled.span`
  -ms-grid-column: 3;
  grid-column-start: 3;
  -ms-grid-column-align: end;
  justify-self: end;
  display: block;
  width: 36px;
  height: 6px;
  margin: 0 auto;
  z-index: 20;
  background: ${props =>
    props.tasksChecked || props.assignmentsChecked
      ? props.theme.secondaryDark
      : props.theme.primaryMed};
  border-radius: 3px;
  -webkit-transform-origin: 4px 0px;
  transform-origin: 4px 0px;
  -webkit-transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease,
    -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  :hover {
    background: ${props => props.theme.disabled};
  }
`;

export const Span = styled.span`
  color: ${props => props.theme.textOverlay};
  font-weight: lighter;
`;

export const PopupFooterButton = styled.button`
  -ms-grid-column: 3;
  grid-column-start: 3;
  -ms-grid-column-align: end;
  justify-self: end;
  height: auto;
  width: 50px;
  background: none;
  border-radius: 4px;
  margin: 0.2em;
  padding: 0.4em 0.3em;
  border: 2px solid ${props => props.theme.neutralLight};
  -ms-grid-row-align: center;
  align-self: center;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  outline: none;
`;

export const ChangePasswordButton = styled(Button)`
  width: 120px;
  font-size: 10px;
  border: 2px solid ${props => props.theme.error};
`;

export const ThemeGrid = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 0.5em 50px 0.5em 50px 0.5em 50px;
  grid-template-columns: auto 50px 50px 50px;
  grid-column-gap: 0.5em;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const ThemeField = styled.h4`
  -ms-grid-column: 1;
  margin-left: 10px;
`;

export const ThemeButton = styled.button`
  -ms-grid-column: 3;
  margin: 0 auto;
  z-index: 50;
  vertical-align: middle;
  height: 40px;
  width: 40px;
  max-width: 40px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border-style: none;
  color: ${props => props.theme.text};
  background-color: #faf9f9;
  border-radius: 100%;
  text-align: center;
  padding: 0;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  -webkit-transform: scale(1) translateZ(0);
  transform: scale(1) translateZ(0);
  ::-moz-focus-inner {
    border: 0;
  }
  :hover {
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
    -webkit-filter: brightness(105%);
    filter: brightness(105%);
    background: ${props => props.theme.primaryDark};
  }
  :active {
    -webkit-filter: brightness(115%);
    filter: brightness(115%);
  }
`;

export const DarkThemeButton = styled(ThemeButton)`
  -ms-grid-column: 5;
  color: #b09b9b;
  background-color: #1e1e1e;
`;

export const IceThemeButton = styled(ThemeButton)`
  -ms-grid-column: 7;
  color: #b09b9b;
  background-color: #194169;
`;
