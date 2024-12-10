import Image from "next/image";
import React from "react";
import { Button, ConfigProvider } from "antd";
import navbarCss from "../styles/navbar.module.css";
import { Menu } from "antd";
import "../styles/antd-overides.css";

export default function Navbar() {
    const logo = [
        {
            key: "logo",
            label: (
                <Image
                    src="/images/nuodata-logo.png"
                    alt="nuodata-logo"
                    height={40}
                    width={170}
                    className={navbarCss.logoImage}
                />
            ),
            className: navbarCss.logoMenuItem,
        },
    ];

    const items = [
        {
            key: "sub1",
            label: <p className={navbarCss.listStyle}>Why NuoData?</p>,
        },
        {
            key: "sub2",
            label: <p className={navbarCss.listStyle}>Platforms</p>,
        },
        {
            key: "sub3",
            label: <p className={navbarCss.listStyle}>Customers</p>,
        },
        {
            key: "sub4",
            label: <p className={navbarCss.listStyle}>Partners</p>,
        },
        {
            key: "sub5",
            label: <p className={navbarCss.listStyle}>Resources</p>,
        },
        {
            key: "button1",
            label: (
                <Button ghost color="default" variant="outlined">
                    Contact us
                </Button>
            ),
        },
        {
            key: "button2",
            label: (
                <Button
                    type="primary"
                    className="custom-primary-button navButton"
                >
                    START FOR FREE
                </Button>
            ),
        },
    ];

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            activeBarHeight: 0,
                        },
                    },
                }}
            >
                <div className={navbarCss.navbarContainer}>
                    <Menu
                        className={navbarCss.outerContainer}
                        mode="horizontal"
                        items={logo}
                    />
                    <Menu
                        className={navbarCss.outerContainerNoPadding}
                        mode="horizontal"
                        items={items}
                    />
                </div>
            </ConfigProvider>
        </>
    );
}
