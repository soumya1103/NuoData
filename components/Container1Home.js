import React from "react";
import { Col, Row, Button } from "antd";
import Image from "next/image";
import container1Css from "../styles/container1.module.css";

const contentStyle = {
    color: "#fff",
    textAlign: "left",
};

export default function Container1Home() {
    return (
        <>
            <Row
                justify="left"
                align="middle"
                className={container1Css.outerContainer}
            >
                <Col span={10}>
                    <div style={contentStyle}>
                        <h1 className={container1Css.heading}>
                            Building Tomorrow's Data Universe Today
                        </h1>
                        <p className={container1Css.subHeading}>
                            The All-in-One Platform for Data Engineering,
                            Analytics & Modernization
                        </p>
                        <Button
                            className="custom-primary-button"
                            type="primary"
                        >
                            Read More
                        </Button>
                        <Button ghost color="default" variant="outlined">
                            Book a Demo
                        </Button>
                    </div>
                </Col>
                <Col span={8} offset={4}>
                    <Image
                        src="/images/flowchart-C1.png"
                        height={450}
                        width={550}
                        alt="Flowchart"
                    />
                </Col>
            </Row>
        </>
    );
}
