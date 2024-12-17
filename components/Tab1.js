import Image from "next/image";
import tab1Css from "../styles/tab1.module.css";
import React from "react";
import { Col, Row, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Tab1() {
    const data = [
        {
            heading: "AI Governance:",
            description: "Ensure trust and compliance for AI/ML models.",
        },
        {
            heading: "Data Catalog:",
            description:
                "Unified view of all enterprise data assets with seamless metadata ingestion from 450+ sources.",
        },
        {
            heading: "Data Lineage:",
            description:
                "Visualize static and code-based lineage for impact analysis.",
        },
        {
            heading: "Accelerated Insights:",
            description:
                "Transform and analyze data 60X faster with low-code/no-code tools.",
        },
        {
            heading: "Data Protection:",
            description: " Automate sensitive data and PII management.",
        },
        {
            heading: "Data Governance:",
            description:
                "Fine-grain control to maximize adoption and minimize risks.",
        },
        {
            heading: "Data Quality:",
            description:
                "Define rules, monitor quality, and build trust with a data trust index.",
        },
    ];
    return (
        <>
            <div className={tab1Css.outerContainer}>
                <div className={tab1Css.flexContainer}>
                    <Image
                        src="/images/c8-img1.png"
                        width={86}
                        height={86}
                        alt="logo"
                    />
                    <hr className={tab1Css.verticalHr} />
                    <div>
                        <h2>NuoData - Astra</h2>
                        <h4>
                            Data Catalog, Lineage, Glossary and Governance
                            platform
                        </h4>
                        <p>
                            NuoData – Astra is your all-in-one platform for
                            seamless data management. It empowers organizations
                            with robust cataloging, end-to-end data lineage, a
                            comprehensive glossary, and effective governance
                            tools. Simplify compliance, enhance data visibility,
                            and drive informed decision-making effortlessly.
                        </p>
                    </div>
                </div>
                <Row className={tab1Css.gridContainer}>
                    <Col xl={12} lg={12} md={12} xs={24}>
                        {data.map((item, index) => (
                            <div key={index}>
                                <h5>{item.heading}</h5>
                                <p>{item.description}</p>
                                <hr className={tab1Css.horizontalHr} />
                            </div>
                        ))}
                    </Col>
                    <Col xl={12} lg={12} md={12} xs={24}>
                        <Image
                            src="/images/browser.png"
                            width={627}
                            height={403}
                            alt="browser"
                            layout="responsive"
                        />
                        <Image
                            src="/images/play-btn.png"
                            width={60}
                            height={60}
                            alt="play"
                            className={tab1Css.playBtn}
                        />
                        <div className={tab1Css.readMoreBtn}>
                            <Button
                                className="custom-primary-button readMore"
                                type="primary"
                            >
                                Read More <ArrowRightOutlined />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}
