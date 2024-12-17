"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button, ConfigProvider, Menu, Drawer } from "antd";
import navbarCss from "../styles/navbar.module.css";
import "../styles/antd-overides.css";

export default function Navbar() {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTab, setIsTab] = useState(false);

    const handleResize = () => {
        setIsTab(window.innerWidth <= 1024);
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const logo = (
        <Image
            src="/images/nuodata-logo.png"
            alt="nuodata-logo"
            height={40}
            width={170}
            className={navbarCss.logoImage}
        />
    );

    const menuItems = [
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
                <div className={navbarCss.logoContainer}>{logo}</div>
                {isMobile || isTab ? (
                    <>
                        <Button
                            type="text"
                            icon={<i className="fas fa-bars"></i>}
                            onClick={() => setDrawerVisible(true)}
                            className={navbarCss.mobileMenuButton}
                        />
                        <Drawer
                            placement="right"
                            onClose={() => setDrawerVisible(false)}
                            visible={drawerVisible}
                        >
                            <Menu
                                mode="vertical"
                                items={menuItems}
                                className={navbarCss.mobileMenu}
                            />
                        </Drawer>
                    </>
                ) : (
                    <Menu
                        className={navbarCss.outerContainerNoPadding}
                        mode="horizontal"
                        items={menuItems}
                    />
                )}
            </div>
        </ConfigProvider>
    );
}
