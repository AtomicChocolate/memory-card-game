// @ts-nocheck
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
        width: 50%;
        margin: auto;

        @media (max-width: 1000px) {
            width: 70%;
        }
    }
`;

export default GlobalStyle;
