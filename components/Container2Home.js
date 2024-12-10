import CardComponent from "./Card";
import { Row, Col, Card } from "antd";
import container2Css from "../styles/container2.module.css";
import Image from "next/image";

export default function Container2Home() {
    return (
        <>
            <div className={container2Css.outerContainer}>
                <h2 className={container2Css.heading}>Meet NuoData Universe</h2>
                <p className={container2Css.subheading}>
                    The NuoData Universe is a comprehensive suite of seven
                    interconnected solutions—Astra, Quantum, Maestro, Spectra,
                    Guardian, Nova AI, and TransformX—designed to address every
                    aspect of enterprise data management, modernization,
                    security, AI, and observability. Together, these modules
                    create a unified platform, enabling businesses to manage,
                    modernize, and extract valuable insights from their data
                    seamlessly
                </p>
            </div>
            <Row className={container2Css.cardContainer}>
                <Col span={5} offset={1}>
                    <CardComponent
                        data="Your Data, Your AI, Your Budget Card content"
                        imgSrc="/images/card-icon1.png"
                    />
                </Col>
                <Col span={5} offset={1}>
                    <CardComponent
                        data="Build, Ingest, Transform Data 60X Faster"
                        imgSrc="/images/card-icon2.png"
                    />
                </Col>
                <Col span={5} offset={1}>
                    <CardComponent
                        data="The All-in-One Platform for Data Engineering, Analytics Modernization"
                        imgSrc="/images/card-icon3.png"
                    />
                </Col>
                <Col span={5} offset={1}>
                    <CardComponent
                        data=" Unmatched Flexibility & Ownership Run on Any Engine, Any Runtime, Any Storage"
                        imgSrc="/images/card-icon4.png"
                    />
                </Col>
            </Row>
            <Row className={container2Css.cardContainer}>
                <Col span={12} offset={6}>
                    <Card bordered={false} className={container2Css.bg}>
                        <Image
                            className={container2Css.logo}
                            src="/images/nuodata-logo.png"
                            alt="icon1"
                            height={35}
                            width={140}
                        />
                        <Image
                            className={container2Css.icon5}
                            src="/images/card-icon5.png"
                            alt="icon5"
                            height={60}
                            width={60}
                        />
                    </Card>
                </Col>
            </Row>
        </>
    );
}
