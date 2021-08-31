import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const lightTheme = {
  accent: "#48DBFB",
  bgColor: "#FAFAFA",
  fontColor: "rgb(38, 38, 38)",
  borderColor: "rgb(219, 219, 219)",
  blackGrey: "#576574",
  darkGrey: "#8395a7",
  midGrey: "#c8d6e5",
  lightGrey: "#F4F4F4",
  lightRed: "#ff6b6b",
  yellow: "#feca57",
  windowWidth: `${window.innerWidth}px`,
  windowHeight: `${window.innerHeight - 35}px`,
}

export const darkTheme = {
  fontColor: "white",
  bgColor: "#000",
}

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
        background-color:${(props) => props.theme.bgColor};
        font-size:14px;
        font-family:"GmarketSansMedium";
        color:${(props) => props.theme.fontColor};
    }
    a {
      text-decoration: none;
      color:inherit;
    }
`
