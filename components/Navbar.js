import Image from "next/image";
import React from "react";
import { Col, Row, Button } from "antd";
import navbarCss from "../styles/navbar.module.css";
import "../styles/antd-overides.css";

export default function Navbar() {
    return (
        <>
            <Row
                justify="center"
                align="middle"
                // gutter={16}
                className={navbarCss.outerContainer}
            >
                <Col span={2}>
                    <Image
                        src="/images/nuodata-logo.png"
                        alt="nuodata-logo"
                        height={45}
                        width={180}
                    />
                </Col>
                <Col span={2} offset={6}>
                    <li className={navbarCss.listStyle}>Why NuoData?</li>
                </Col>
                <Col span={2}>
                    <li className={navbarCss.listStyle}>Platforms</li>
                </Col>
                <Col span={2}>
                    <li className={navbarCss.listStyle}>Customers</li>
                </Col>
                <Col span={2}>
                    <li className={navbarCss.listStyle}>Partners</li>
                </Col>
                <Col span={2}>
                    <li className={navbarCss.listStyle}>Resources</li>
                </Col>
                <Col span={2}>
                    <Button ghost color="default" variant="outlined">
                        Contact us
                    </Button>
                </Col>
                <Col span={2}>
                    <Button className="custom-primary-button" type="primary">
                        START FOR FREE
                    </Button>
                </Col>
            </Row>
        </>
    );
}
