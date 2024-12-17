import React from "react";
import { Col, Row } from "antd";
import container9Css from "../styles/container9.module.css";
import Image from "next/image";

export default function Container9Home() {
    return (
        <>
            <div className={container9Css.outerContainer}>
                <div className={container9Css.innerContainer}>
                    <Row>
                        <Col span={24}>
                            <div className={container9Css.box}>
                                <button
                                    className={container9Css.buttonGradient}
                                >
                                    Any Infrastructure
                                </button>
                                <div className={container9Css.imgContainer}>
                                    <Image
                                        className={container9Css.images}
                                        src="/images/c9-img1.svg"
                                        height={100}
                                        width={100}
                                        alt="gcp"
                                    />
                                    <Image
                                        className={container9Css.images}
                                        src="/images/c9-img2.svg"
                                        height={60}
                                        width={60}
                                        alt="aws"
                                    />
                                    <Image
                                        className={container9Css.images}
                                        src="/images/c9-img3.svg"
                                        height={60}
                                        width={60}
                                        alt="azure"
                                    />
                                    <Image
                                        className={container9Css.images}
                                        src="/images/c9-img4.svg"
                                        height={100}
                                        width={100}
                                        alt="gcp"
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className={container9Css.secondRow}>
                        <Col xl={7} lg={7} md={7} xs={24}>
                            <div
                                className={`${container9Css.box} ${container9Css.verticalBox}`}
                            >
                                <button
                                    className={container9Css.buttonGradient}
                                >
                                    Any Engine
                                </button>
                                <div
                                    className={container9Css.imagesVerticalBox1}
                                >
                                    <div>
                                        <Image
                                            src="/images/c9-img5.svg"
                                            height={50}
                                            width={100}
                                            alt="gcp"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img6.svg"
                                            height={50}
                                            width={100}
                                            alt="aws"
                                        />
                                    </div>
                                    <Image
                                        src="/images/c9-img7.svg"
                                        height={50}
                                        width={100}
                                        alt="azure"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col
                            xl={{ span: 7, offset: 1 }}
                            lg={{ span: 7, offset: 1 }}
                            md={{ span: 7, offset: 1 }}
                            xs={{ span: 24, offset: 0 }}
                        >
                            <div
                                className={`${container9Css.box} ${container9Css.verticalBox}`}
                            >
                                <button
                                    className={container9Css.buttonGradient}
                                >
                                    Any Runtime
                                </button>
                                <div
                                    className={container9Css.imagesVerticalBox2}
                                >
                                    <div>
                                        <Image
                                            src="/images/c9-img5.svg"
                                            height={50}
                                            width={100}
                                            alt="gcp"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img8.svg"
                                            height={70}
                                            width={70}
                                            alt="aws"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img9.svg"
                                            height={50}
                                            width={50}
                                            alt="azure"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img12.svg"
                                            height={50}
                                            width={150}
                                            alt="azure"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img10.svg"
                                            height={50}
                                            width={130}
                                            alt="azure"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img11.svg"
                                            height={50}
                                            width={110}
                                            alt="azure"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col
                            xl={{ span: 7, offset: 1 }}
                            lg={{ span: 7, offset: 1 }}
                            md={{ span: 7, offset: 1 }}
                            xs={{ span: 24, offset: 0 }}
                        >
                            <div
                                className={`${container9Css.box} ${container9Css.verticalBox}`}
                            >
                                <button
                                    className={container9Css.buttonGradient}
                                >
                                    Any Storage
                                </button>
                                <div
                                    className={container9Css.imagesVerticalBox3}
                                >
                                    <div>
                                        <Image
                                            src="/images/c9-img13.svg"
                                            height={50}
                                            width={100}
                                            alt="gcp"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img14.svg"
                                            height={60}
                                            width={80}
                                            alt="aws"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img15.svg"
                                            height={50}
                                            width={70}
                                            alt="azure"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img16.svg"
                                            height={50}
                                            width={110}
                                            alt="azure"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img17.svg"
                                            height={50}
                                            width={50}
                                            alt="azure"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img18.svg"
                                            height={50}
                                            width={100}
                                            alt="azure"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/c9-img19.svg"
                                            height={40}
                                            width={100}
                                            alt="azure"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}
