import styled from "styled-components"

export const HeroContainer = styled.section`
    width: 100%;
    height: calc(100vh - 120px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue);
    flex-direction: column;

    @media (max-width: 768px) {
            height: 100vh;
        }  

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        @media (max-width: 768px) {
            display: none
        }  
    }
`

export const Benefits = styled.section`
    display: flex;
    justify-content: center;
    padding: 30px 25px;
    background-color: var(--blue);
    align-items: center;
    justify-content: center;
    color: var(--white);
    gap: 150px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
        }  
`
export const BenefitsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    width: 33%;
    @media (max-width: 768px) {
        width: 100%;
        }  
`

export const BenefitsCardIcon = styled.div`
    font-size: 35px;
`

export const BenefitsCardText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h2 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 18px;
    }

    p {
        font-size: 13px;
        font-weight: 200;
    }
`