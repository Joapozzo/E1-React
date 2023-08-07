import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E71D36;
        --blue: #011627;
        --white: #FAFAFA;
        --gray: #dddddd;
        --montserrat: 'Montserrat', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: var(--montserrat);
    }
    
    html{
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--white);
    }

    a {
        text-decoration: none;
        color: white;
    }
    li {
        list-style: none;
    }
`