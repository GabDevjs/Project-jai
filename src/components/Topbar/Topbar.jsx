import React, { useState } from "react";
import {
    TopbarContainer,
    PerfilFoto,
    ImgContainerTop,
    LinkText,
    LinkContainer,
    DropdownContainer,
    Divider,
    ContainerTopbar,
} from "./styles";
import { Popover } from '@headlessui/react'
import { usePopper } from 'react-popper'
import { Dropdown, } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import perfil from "../../assets/perfil.jpeg";

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
    { key: 4, text: 'Choice 4', value: 4 },
    { key: 5, text: 'Choice 5', value: 5 },
    { key: 6, text: 'Choice 6', value: 6 },
]

const linksArray = [
    {
        label: "Engagement",
    },
    {
        label: "Security",
    },
    {
        label: "Integrations",
    },
    {
        label: "Security Integrations",
    },
    {
        label: "exemplo",
    },
    {
        label: "exemplo",
    },
];

const Topbar = () => {
    let [referenceElement, setReferenceElement] = useState()
    let [popperElement, setPopperElement] = useState()
    let { styles, attributes } = usePopper(referenceElement, popperElement)

    return (
        <TopbarContainer>
            <LinkText>
                <h2>Dashboard</h2>
            </LinkText>

            <ContainerTopbar>
                <LinkText>
                    <p>Item</p>
                </LinkText>
                <DropdownContainer compact>
                    <Dropdown text='dropdown' options={options} item />
                </DropdownContainer>
                <LinkText>
                    <p>Item3</p>
                </LinkText>
                <LinkText>
                    <p>Item4</p>
                </LinkText>
                <DropdownContainer compact>
                    <Dropdown text='dropdown' options={options} simple item />
                </DropdownContainer>

                <Popover>
                    <Popover.Button>
                        <ImgContainerTop>
                            <PerfilFoto>
                                <img src={perfil} alt="perfil" />
                            </PerfilFoto>
                        </ImgContainerTop>
                    </Popover.Button>

                    <Popover.Panel>
                        <LinkContainer>
                            {linksArray.map(({ label }) => (
                                <>
                                    <LinkText >
                                        {label}

                                    </LinkText>
                                    <Divider />
                                </>
                            ))
                            }
                        </LinkContainer>
                    </Popover.Panel>
                </Popover>
            </ContainerTopbar>
        </TopbarContainer>
    );
};

export default Topbar;
