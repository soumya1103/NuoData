import React from "react";
import { Carousel, Row, Col } from "antd";
import container5Css from "../styles/container5.module.css";
import Image from "next/image";

export default function Container5Home() {
    return (
        <>
            <div className={container5Css.outerContainer}>
                <h2>Overcoming Your Biggest Data Challenges</h2>
                <h3 className={container5Css.subheading}>
                    Nuo<span style={{ color: "#e74860" }}>Data</span> turns
                    enterprise data obstacles into opportunities 😃
                </h3>
                <div
                    className={`${container5Css.carouselContainer} container5`}
                >
                    <Carousel autoplay>
                        <div>
                            <Row>
                                <Col span={11}>
                                    <div
                                        className={
                                            container5Css.carouselR1Outer
                                        }
                                    >
                                        <div
                                            className={container5Css.carouselR1}
                                        >
                                            <Image
                                                src="/images/c5-img1.png"
                                                height={50}
                                                width={50}
                                                alt="dart"
                                                className={container5Css.c5Img}
                                            />
                                            <h3>
                                                Overcoming Business Hurdles 😞
                                            </h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={11} offset={2}>
                                    <div
                                        className={
                                            container5Css.carouselR1Outer
                                        }
                                    >
                                        <div
                                            className={container5Css.carouselR1}
                                        >
                                            <Image
                                                className={container5Css.c5Img}
                                                src="/images/c5-img2.png"
                                                height={50}
                                                width={50}
                                                alt="dart"
                                            />
                                            <h3>Astra NuoData Solution</h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={11}>
                                    <div>
                                        <div
                                            className={container5Css.carouselR2}
                                        >
                                            <h4>
                                                Enhancing Data Discovery and
                                                Governance for a Big credit card
                                                company
                                            </h4>
                                            <p>
                                                A major credit card company
                                                faced scattered metadata across
                                                tools, causing inefficiencies,
                                                duplicate work, and data quality
                                                issues for its teams.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={11} offset={2}>
                                    <div>
                                        <div
                                            className={container5Css.carouselR2}
                                        >
                                            <h4>
                                                Centralized Metadata Platform
                                                for Unified Data Discovery and
                                                Governance
                                            </h4>
                                            <p>
                                                Implemented Atlas as a
                                                centralized platform for
                                                metadata, unifying discovery,
                                                observability, and governance
                                                with pre-built connectors and
                                                advanced search features.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col span={11}>
                                    <div>
                                        <div
                                            className={container5Css.carouselR2}
                                        >
                                            <h4>
                                                Implementing Efficient and
                                                Collaborative Data Quality
                                                Management for a retail giant
                                            </h4>
                                            <p>
                                                A Fortune 1000 retail giant
                                                faced challenges in maintaining
                                                data quality across sources,
                                                limited team collaboration, and
                                                insufficient visibility into
                                                quality issues.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={11} offset={2}>
                                    <div>
                                        <div
                                            className={container5Css.carouselR2}
                                        >
                                            <h4>
                                                Seamless Data Quality
                                                Integration with No-Code Testing
                                                and Insightful KPIs
                                            </h4>
                                            <p>
                                                Integrated NuoData Atlas's
                                                native data quality tools into
                                                workflows:
                                                <ul
                                                    className={
                                                        container5Css.uList
                                                    }
                                                >
                                                    <li>
                                                        Enabled no-code test
                                                        creation for both
                                                        technical and business
                                                        users.
                                                    </li>
                                                    <li>
                                                        Established data quality
                                                        KPIs and leveraged
                                                        insights to monitor
                                                        progress.
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div></div>
                        <div></div>
                    </Carousel>
                </div>
            </div>
        </>
    );
}
