import { styled } from "styled-components";

export const ProductsWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 0 100px 0;
    gap: 50px;

    h3 {
        color: var(--blue);
        font-size: 25px;
    }

    
`
export const ProductsTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    border-width: 0 0px 1px 0px;
    border-color: transparent var(--blue) var(--blue) var(--blue);
    border-style: solid;
    background-color: transparent;
    padding: 25px;
    margin: 20px;

    div {
        display: flex;
        gap: 20px;
    }

    span {
        display: flex;
        gap: 20px;
        cursor: pointer;
    }

    button {
        padding: 5px 15px;
        background-color: transparent;
        border: 1px solid var(--blue);
        cursor: pointer;
    }

    button:hover{
        transition: all .2s ease-in-out;
        background-color: var(--red);
        color: white;
        border: 1px solid var(--red);
    }

    h4 {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        p {
            display: none;
        }

        h4 {
            font-size: 16px;
        }
    }

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