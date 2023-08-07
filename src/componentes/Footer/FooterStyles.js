import {styled} from "styled-components"

export const FooterTop = styled.section`
    background-color: var(--red);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 100px;

    img {
        width: 120px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        gap: 50px;
    } 
`

export const FootTextContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    h2 {
        font-size: 18px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    li a {
        font-weight: 200;
        font-size: 16px;
        cursor: pointer;
    }

    li a:hover {
        color: var(--blue);
        transition: all .2s ease-in;
    }

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        width: 100%;
        ul {
            justify-content: center;
            align-items: center;
            
        }
        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 5px;
            width: 100%;
        }
    } 
`
export const FooterDown = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue);
    color: var(--white);
    font-size: 14px;
    padding: 10px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`