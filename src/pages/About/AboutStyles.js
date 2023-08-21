import { styled } from "styled-components";

export const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 80px 80px 0 80px;
    background-color: var(--blue);
    color: var(--white);
    height: 100%;
    width: 100%;
    gap: 60px;
    align-items: center;
`

export const AboutTitle = styled.div`
    display: flex;
    width: 100%;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`
export const AboutText = styled.div`
    display: flex;
    width: 100%;
    font-size: 16px;
    text-align: start;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const AddToCopa = styled.div`
    position: relative;
    h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        background-color: var(--red);
        border-radius: 5px;
        font-size: 30px;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    img {
        object-fit: cover;
        filter: brightness(20%);
    }
`
