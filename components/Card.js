import React from "react";
import { Card } from "antd";
import cardCss from "../styles/card.module.css";
import Image from "next/image";

const { Meta } = Card; // Extract the Meta subcomponent

export default function CardComponent({
    data,
    imgSrc,
    coverImg,
    coverImgUrl,
    heading,
}) {
    return (
        <>
            {coverImg ? (
                <Card
                    className={`${cardCss.coverCardStyle} c4Card`}
                    cover={
                        <Image
                            className={cardCss.coverImg}
                            alt="example"
                            src={coverImgUrl}
                            height={200}
                            width={400}
                        />
                    }
                >
                    <div>
                        <h3>{heading}</h3>
                        <p>{data}</p>
                    </div>
                </Card>
            ) : (
                <Card
                    bordered={false}
                    className={`${cardCss.cardStyle} c2Card`}
                >
                    <p className={cardCss.cardText}>{data}</p>
                    <Image
                        className={cardCss.cardImg}
                        src={imgSrc}
                        alt="icon1"
                        height={30}
                        width={30}
                    />
                </Card>
            )}
        </>
    );
}
