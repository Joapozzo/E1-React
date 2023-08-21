import { styled } from "styled-components";

export const ErrorWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: var(--blue);
    flex-direction: column;
    color: white;
    gap: 20px;

    h2 {
        font-size: 50px;
        background-color: var(--red);
        padding: 10px;
        border-radius: 10px;
    }
`