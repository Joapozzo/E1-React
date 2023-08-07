import { styled } from "styled-components";

export const ProductsWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    max-width: 1300px;
    width: 100%;
    padding: 0 20px 30px;
    gap: 50px;
`
export const ProductsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    row-gap: 80px;
`
export const ProductCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 290px;
    gap: 15px;

    img {
        height: 390px;
        width: 100%;
        position: relative;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        text-transform: uppercase;
    }

    h3 {
        font-weight: 800;
        font-size: 16px;
    }

`
export const PartsPrice = styled.div `
    display: flex;
    gap: 5px;
    align-items: center;
    color: var(--red);
    font-weight: 700;
    font-size: 12px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;

    a:hover {
        background-color: var(--blue);
        color: white;
        transition: all .2s ease-in;
    }
`

export const ButtonsMainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    gap: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 50%;
        gap: 15px;
    }  

    a:hover {
        border: none;
        background-color: var(--red);
        color: white;
        transition: all .2s ease-in;
    }
`

export const Buttons = styled.a `
    background-color: transparent;
    padding: 8px 15px;
    border: 1px solid var(--blue);
    width: 50%;
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    color: var(--blue);
    position: relative;
    display: block;
    overflow: hidden;
    cursor: pointer;
`