import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";

export const Sidebar = styled.div`
    width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};
    position: relative;
    z-index: 100;
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    transition: all 0.3s ease-in-out;
`;

export const SidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const Logo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: ${v.lgSpacing};
    cursor: pointer;


    h4 {
        font-size: ${v.lgFontSize};
        margin-left:   ${v.mdSpacing}; ;
        font-size: 1.4rem;
        font-weight: 800;
        color: ${({ theme }) => theme.text}; 
    }
`;

export const ContainerImgLogo = styled.div`
    width: 54px;
    
 img {
        max-width: 100%;
        height: 100%;
    }
`;

export const SearchContainer = styled.div`
    background: ${({ theme }) => theme.bgAlpha};
    border: 1px solid ${({ theme }) => theme.bg3};
    border-radius: ${v.borderRadius};
    input {
        padding: 0 ${v.smSpacing};
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
        transition: all 0.2s ease-in-out;

        &:focus {
            border: 1px solid ${({ theme }) => theme.primary};
        border-radius: ${v.borderRadius} 0 0 ${v.borderRadius};    
        }
    }
    display: flex;
`;

export const SearchIcon = styled.button`
    ${btnReset};
    padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
    display: flex;
    cursor: pointer;

    svg {
        font-size: 20px;
    }
`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;

export const LinkContainer = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.bg3)};
    color: ${({ theme, isActive }) => (isActive ? theme.primary : theme.text)};
    border-radius: ${v.borderRadius};
    margin: 8px 0;

    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
        color: ${({ theme }) => theme.primary};
    }
`;

export const LinkText = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
    
    :hover {
        
        color: ${({ theme }) => theme.primary};
    }
`;

export const LinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    svg {
        font-size: 20px;
    }
`;

export const LinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;

export const Theme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;

export const ThemeLabel = styled.span`
    display: block;
    flex: 1;
`;

export const ThemeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 50px;
    height: 24px;
    border-radius: 10px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
    position: relative;
`;

export const Toggleicons = styled.div`
    color: ${({ theme }) => theme.text};;
    font-size: 17px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 2px;
`;

export const ToggleThumb = styled.div`
    height: 22px;
    width: 22px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
`;