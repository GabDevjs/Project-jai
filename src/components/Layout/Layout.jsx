import React from "react";
import SidebarNav from "../Sidebar/Sidebar";
import styled from "styled-components";
import { v } from "../../styles/variables";
import Topbar from "../Topbar/Topbar";

const SLayout = styled.div`
    display: flex;
    height: 100vh;
`;

const SMain = styled.main`
   display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
`;

const Layout = ({ children }) => {
    return (
        <SLayout>
            <SidebarNav />

            <SMain>
                <Topbar />
                {children}
            </SMain>
        </SLayout>
    );
};

export default Layout;
