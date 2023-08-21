import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
    color: white;
`;

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: end;
    flex-direction: column;
    height: 100px;
    width: 100%;
`;

export const NavbarTop = styled.div`
    width: 100%;
    height: 40px;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    z-index: 60;
    p {
        font-size: 12px;
        color: var(--white);
    }

    @media (max-width: 768px) {
            p {
                font-size: 10px;
            }
        }    
`;

export const NavbarCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--red);
    width: 100%;
    height: 80px;
    padding: 30px 50px;
    z-index: 20;

    img {
        height: 40px;
        cursor: pointer;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 35px;
        text-align: center;
        color: white;
        font-weight: 500;
        text-transform: uppercase;

        @media (max-width: 768px) {
            display: none;
        }
    }

    li {
        cursor: pointer;
    }

    li:hover {
        color: var(--blue);
        transition: all .2s ease-in-out;
    }

`;

export const IconDesktopContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: var(--white);
    gap: 15px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: none;
    }

    :hover {
        color: var(--blue);
        transition: all .2s ease-in-out;
    }
`;

export const Menuicon = styled(IconDesktopContainer)`
    display: none;
    @media (max-width: 768px) {
        display: flex;
    }
`;

export const ButtonMenu = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 23px;
    color: var(--white);
    
    :hover {
        color: var(--blue);
        transition: all .2s ease-in-out;
    }
`;

export const MenuLinksContainer = styled.div`

@media (max-width: 768px) {
        display: none;
        align-items: end;
        flex-direction: column;
        gap: 20px;
        padding: 40px;
        color: white;
        background-color: var(--red);
        width: 50%;
        height: 100vh;
        z-index: 100;

        a {
            font-size: 18px;
        }

        a:hover {
            color: var(--blue);
            transition: all .2s ease-in-out;
        }
    }    
`