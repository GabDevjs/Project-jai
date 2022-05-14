import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";

export const TopbarContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.bg};
    height: 10vh;
    padding: ${v.lgSpacing};
    padding-left: ${v.xxlSpacing};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};

    Button{
        background: transparent;
        border: none;
    }
`;

export const ImgContainerTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 4rem auto;
`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.smSpacing} 0;
`;

export const PerfilFoto = styled.div`
     width: 50px;
     border: 1px solid ${({ theme }) => theme.bg3};
    border-radius: 50%;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
 img {
        max-width: 100%;
        height: 100%;
        border-radius: 50%;  
    }
`;

export const LinkContainer = styled.div`
    position: absolute;
    top: 11vh;
    right: 2vh;
    padding: ${v.smSpacing};
    background: ${({ theme }) => theme.bg};
    color: ${({ theme, isActive }) => (isActive ? theme.primary : theme.text)};
    border-radius: ${v.borderRadius};
    transition: all 0.5s ease-in-out;

    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }
`;

export const ContainerTopbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LinkText = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    font-size: 17px;
    padding: ${v.smSpacing};
    :hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const DropdownContainer = styled.div`
     display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: ${v.smSpacing};
    :hover {
        color: ${({ theme }) => theme.primary};
    }


`;
