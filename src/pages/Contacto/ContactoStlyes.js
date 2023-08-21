import { styled } from "styled-components";

export const ContactWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 80px;
    align-items: center;
    background-color: var(--blue);
    color: var(--white);
    height: 100vh;
    width: 100%;
    gap: 60px;
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;

    input {
        width: 30%;
        padding: 8px 10px;
        background-color: transparent;
        border: 1px solid var(--red);
        color: white;

        @media (max-width: 768px) {
            width: 70%;
        }
    }

    button {
        width: 30%;
        padding: 10px;
        cursor: pointer;

        @media (max-width: 768px) {
            width: 70%;
        }
    }

    button:hover {
        transition: all .2s ease-in-out;
        background-color: transparent;
        border: 1px solid var(--red);
        color: white;
    }
`
