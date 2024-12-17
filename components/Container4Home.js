import container4Css from "../styles/container4.module.css";
import { Button, Row, Col } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
import CardComponent from "./Card";

export default function Container4Home() {
    return (
        <>
            <div className={container4Css.outerContainer}>
                <div className={container4Css.boxContainer}>
                    <div className={container4Css.boxParent}>
                        <div className={container4Css.box}>
                            <h2>
                                Why Fortune top companies are choosing NuoData -
                                Universe
                            </h2>
                            <Button
                                className="custom-primary-button demo"
                                type="primary"
                            >
                                Book a demo
                                <RightCircleOutlined />
                            </Button>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col
                        xl={{ span: 7, offset: 1 }}
                        lg={{ span: 7, offset: 1 }}
                        md={{ span: 7, offset: 1 }}
                        xs={{ span: 24, offset: 0 }}
                    >
                        <CardComponent
                            coverImg="true"
                            heading="Enhancing Data Discovery and Governance for a Big credit card company"
                            data="A big credit card company was struggling with scattered metadata across multiple tools, making it difficult for data teams to find, understand, and trust the data they need. This leads to inefficiencies, duplicate work, and potential data quality issues."
                            imgSrc="/images/card-icon1.png"
                            coverImgUrl="/images/c4-card1.png"
                        />
                    </Col>
                    <Col
                        xl={{ span: 7, offset: 1 }}
                        lg={{ span: 7, offset: 1 }}
                        md={{ span: 7, offset: 1 }}
                        xs={{ span: 24, offset: 0 }}
                    >
                        <CardComponent
                            coverImg="true"
                            heading="Implementing Efficient and Collaborative Data Quality Management for a retail giant."
                            data="A fortune 1000 listed retail giant was facing difficulties in maintaining data quality across various data sources, with limited collaboration between teams and a lack of visibility into data quality issues. Traditional data quality tools are often disconnected from other data processes and require significant technical expertise."
                            imgSrc="/images/card-icon1.png"
                            coverImgUrl="/images/c4-card2.png"
                        />
                    </Col>
                    <Col
                        xl={{ span: 7, offset: 1 }}
                        lg={{ span: 7, offset: 1 }}
                        md={{ span: 7, offset: 1 }}
                        xs={{ span: 24, offset: 0 }}
                    >
                        <CardComponent
                            coverImg="true"
                            heading="Modernizing Financial Reporting for a Multi-national Corporation"
                            data="A large financial services firm struggled with consolidating financial data from its global subsidiaries for regulatory reporting and business intelligence. The existing process involved manual data collection, Excel-based transformations, and was prone to errors and delays."
                            imgSrc="/images/card-icon1.png"
                            coverImgUrl="/images/c4-card3.png"
                        />
                    </Col>
                </Row>
                <Button
                    className="custom-primary-button customer"
                    type="primary"
                >
                    See All customers stories
                    <RightCircleOutlined />
                </Button>
            </div>
        </>
    );
}
