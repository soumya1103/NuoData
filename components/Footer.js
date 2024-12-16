import Image from "next/image";
import { Button, Row, Col } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
import footerCss from "../styles/footer.module.css";

export default function Footer() {
    return (
        <>
            <div className={footerCss.outerContainer}>
                <div className={footerCss.innerContainer}>
                    <div className={footerCss.bgColor}>
                        <div className={footerCss.boxContainer}>
                            <div className={footerCss.boxParent}>
                                <div className={footerCss.box}>
                                    <Image
                                        src="/images/footer-n.png"
                                        height={80}
                                        width={80}
                                        alt="N"
                                    />
                                    <div>
                                        <h2>2024 PARTNER PROGRAM</h2>
                                        <p>
                                            Let’s join forces to provide
                                            outstanding data management and
                                            modernization solutions for today’s
                                            enterprise clients.
                                        </p>
                                    </div>
                                    <Button
                                        className="custom-primary-button demo"
                                        type="primary"
                                    >
                                        Become a Partner
                                        <RightCircleOutlined />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <Row
                            gutter={{
                                xs: 8,
                                sm: 16,
                                md: 24,
                                lg: 32,
                            }}
                            className={footerCss.footerText}
                        >
                            <Col className="gutter-row" span={6}>
                                <div>
                                    <ul className={footerCss.listText}>
                                        <li>
                                            <h4
                                                className={
                                                    footerCss.listHeading
                                                }
                                            >
                                                How it works
                                            </h4>
                                        </li>
                                        <li>
                                            Delivering Single Version of Truth
                                        </li>
                                        <li>Enterprise Grade Platform</li>
                                        <li>No-Code Transformation</li>
                                        <li>Well Defined Process</li>
                                        <li>Multi Tenancy & RBAC</li>
                                        <li>Prescriptive Analysis</li>
                                        <li>Intuitive UI</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <div>
                                    <ul className={footerCss.listText}>
                                        <li>
                                            <h4
                                                className={
                                                    footerCss.listHeading
                                                }
                                            >
                                                Why NuoData?
                                            </h4>
                                        </li>
                                        <li>6-10X Faster</li>
                                        <li>60-70% Reduced Cost</li>
                                        <li>100% Accuracy</li>
                                        <li>Single Version of Truth</li>
                                        <li>Self Service Validation</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={4} offset={1}>
                                <div>
                                    <ul className={footerCss.listText}>
                                        <li>
                                            <h4
                                                className={
                                                    footerCss.listHeading
                                                }
                                            >
                                                Connect
                                            </h4>
                                        </li>
                                        <li>Contact Us</li>
                                        <li>Book a Demo</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <div>
                                    <ul className={footerCss.listText}>
                                        <li>
                                            <h4
                                                className={
                                                    footerCss.listHeading
                                                }
                                            >
                                                Partners
                                            </h4>
                                        </li>
                                        <li className={footerCss.imageSpace}>
                                            <div
                                                className={
                                                    footerCss.partnerImgBox
                                                }
                                            >
                                                <Image
                                                    src="/images/aws.png"
                                                    width={50}
                                                    height={30}
                                                    alt="aws"
                                                />
                                            </div>
                                            <div
                                                className={
                                                    footerCss.partnerImgBox
                                                }
                                            >
                                                <Image
                                                    src="/images/gcp.png"
                                                    width={80}
                                                    height={40}
                                                    alt="gcp"
                                                />
                                            </div>
                                            <div
                                                className={
                                                    footerCss.partnerImgBox
                                                }
                                            >
                                                <Image
                                                    src="/images/databricks.png"
                                                    width={80}
                                                    height={40}
                                                    alt="databricks"
                                                />
                                            </div>
                                        </li>
                                        <li className={footerCss.imageSpace}>
                                            <div
                                                className={
                                                    footerCss.partnerImgBox
                                                }
                                            >
                                                <Image
                                                    src="/images/azure.png"
                                                    width={70}
                                                    height={25}
                                                    alt="azure"
                                                />
                                            </div>
                                            <div
                                                className={
                                                    footerCss.partnerImgBox
                                                }
                                            >
                                                <Image
                                                    src="/images/snowflake.png"
                                                    width={110}
                                                    height={25}
                                                    alt="snowflake"
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <hr className={footerCss.footerLine} />
                        <Row className={footerCss.rightsReserved}>
                            <Col span={6}>
                                © 2024 NuoData Inc. All Rights Reserved.
                            </Col>
                            <Col span={3} offset={12}>
                                Terms and Conditions
                            </Col>
                            <Col span={3}>Privacy Policy</Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
}
