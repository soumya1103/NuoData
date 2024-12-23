import React from "react";
import { Col, Row, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import container1Css from "../styles/container1.module.css";
import "../styles/antd-overides.css";

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
                <Col xl={12} lg={12} md={12} xs={24}>
                    <div style={contentStyle}>
                        <h1 className={container1Css.heading}>
                            Building Tomorrow&#39;s Data Universe Today
                        </h1>
                        <p className={container1Css.subHeading}>
                            The All-in-One Platform for Data Engineering,
                            Analytics & Modernization
                        </p>
                        <div className={container1Css.gridContainer2Col}>
                            <div>
                                <Button
                                    className="custom-primary-button readMore"
                                    type="primary"
                                >
                                    Read More <ArrowRightOutlined />
                                </Button>
                            </div>
                            <div className={container1Css.boxContainer}>
                                <div className={container1Css.boxParent}>
                                    <div className={container1Css.box}>
                                        Book a Demo
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={9} offset={3} className={container1Css.flowchart}>
                    <Image
                        src="/images/flowchart-C1.png"
                        height={550}
                        width={750}
                        alt="Flowchart"
                        layout="responsive"
                    />
                </Col>
            </Row>
        </>
    );
}
