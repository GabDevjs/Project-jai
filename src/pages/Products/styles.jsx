import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";

export const ProductsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: ${v.xlSpacing};
`;

export const ImageConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: space-between;
    height: 80vh;
    margin-right: ${v.xlSpacing};
    border-radius: ${v.borderRadius};
    padding: ${v.smSpacing} ${v.xlSpacing};
    width: 100%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 5px 5px 5px ${({ theme }) => theme.bg3}, 0 0 10px ${({ theme }) => theme.bg};
`;


export const SearchContainer = styled.div`
    background: ${({ theme }) => theme.bgAlpha};
    border: 1px solid ${({ theme }) => theme.bg3};
    width: 100%;
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


export const Image = styled.div`
    height: 68vh;
    width: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.bgAlpha};
    border-radius: ${v.borderRadius};
    border: 1px solid ${({ theme }) => theme.bg3};
    img {
        max-width: 100%;
        height: 100%;
        border-radius: ${v.borderRadius};
    }
`;

export const SemelantyContainer = styled.div`
    height: 80vh;
    border-radius: ${v.borderRadius};
    padding: ${v.xxlSpacing};
    width: 90%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 5px 5px 5px ${({ theme }) => theme.bg3}, 0 0 10px ${({ theme }) => theme.bg};

    h1{
        text-align: center;
        font-size: 25px;
        font-weight: bold;
    }
`;

export const ScrollConatiner = styled.div`
display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    grid-gap: ${v.smSpacing};
    overflow-y: scroll;
    width: 100%;
    height: 100%;
`;

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30vh;
    width: 22vh;
    border-radius: ${v.borderRadius};
    background: ${({ theme }) => theme.bgAlpha};
    border: 1px solid ${({ theme }) => theme.bg3};
`;

export const ImagemItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    margin: ${v.smSpacing};
    padding: ${v.smSpacing};
    img {
        z-index: 1;
        width: 100%;
        height: 100%;
        border-radius: ${v.borderRadius};

        &:hover {
            cursor: pointer;
            transform: scale(1.09);
        }
    }
`;
