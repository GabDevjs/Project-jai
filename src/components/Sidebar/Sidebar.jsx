import React, { useContext, useState, useRef } from "react";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";
import {
    Divider,
    LinkText,
    LinkContainer,
    LinkIcon,
    LinkLabel,
    ContainerImgLogo,
    Logo,
    SearchContainer,
    SearchIcon,
    Sidebar,
    SidebarButton,
    Theme,
    ThemeLabel,
    ThemeToggler,
    Toggleicons,
    ToggleThumb,
} from "./styles";
//icons
import {
    AiOutlineHome,
    AiOutlineShopping,
    AiOutlineUser,
    AiOutlineLeft,
    AiOutlineComment,
    AiOutlineSetting,
    AiOutlineSearch,
} from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
//logo import
import LogoImg from "../../assets/logo.png";

//array of links
const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/",
    },
    {
        label: "Produtos",
        icon: <AiOutlineShopping />,
        to: "/Produtos",
    },
    {
        label: "Usuários",
        icon: <AiOutlineUser />,
        to: "/User",
    },
    {
        label: "Comenntários",
        icon: <AiOutlineComment />,
        to: "/Comentarios",
    },
];

const secondaryLinksArray = [
    {
        label: "Settings",
        icon: <AiOutlineSetting />,
    },
    {
        label: "Logout",
        icon: <MdLogout />,
    },
];

const SidebarNav = () => {
    const searchRef = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <Sidebar isOpen={sidebarOpen}>
            <>
                <SidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SidebarButton>
            </>
            <Logo>
                <ContainerImgLogo>
                    <img src={LogoImg} alt="logo" />
                </ContainerImgLogo>
                <div>
                    {sidebarOpen && <h4>No-Code Ai</h4>}
                </div>

            </Logo>

            <SearchContainer
                onClick={searchClickHandler}
                style={!sidebarOpen ? { width: `fit-content` } : {}}
            >

                <input
                    ref={searchRef}
                    placeholder="Search"
                    style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
                />
                <SearchIcon>
                    <AiOutlineSearch />
                </SearchIcon>
            </SearchContainer>

            <Divider />

            {linksArray.map(({ icon, label, to }) => (
                <LinkContainer key={label} isActive={pathname === to}>
                    <LinkText to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <LinkIcon>{icon}</LinkIcon>
                        {sidebarOpen && (
                            <>
                                <LinkLabel>{label}</LinkLabel>
                            </>
                        )}
                    </LinkText>
                </LinkContainer>
            ))}

            <Divider />

            {secondaryLinksArray.map(({ icon, label }) => (
                <LinkContainer key={label}>
                    <LinkText to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <LinkIcon>{icon}</LinkIcon>
                        {sidebarOpen && <LinkLabel>{label}</LinkLabel>}
                    </LinkText>
                </LinkContainer>
            ))}

            <Divider />

            <Theme>
                {sidebarOpen && <ThemeLabel>Dark Mode</ThemeLabel>}
                <ThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <Toggleicons>
                        <BsMoonFill />
                        <BsSunFill />
                    </Toggleicons>
                    <ToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </ThemeToggler>
            </Theme>
        </Sidebar>
    );
};

export default SidebarNav;
