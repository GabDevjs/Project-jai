import { Link } from "react-router-dom";
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
    justify-content: center;
    height: 80vh;
    overflow-y: scroll;
    border-radius: ${v.borderRadius};
    padding: ${v.xxlSpacing};
    width: 100%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 5px 5px 5px ${({ theme }) => theme.bg3}, 0 0 10px ${({ theme }) => theme.bg};
`;
