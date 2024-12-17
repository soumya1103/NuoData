import Image from "next/image";
import container7Css from "../styles/container7.module.css";
import { Carousel } from "antd";

export default function Container7Home() {
    return (
        <>
            <div className={container7Css.outerContainer}>
                <div
                    className={`${container7Css.carouselContainer} container7`}
                >
                    <Carousel autoplay>
                        <div>
                            <h2>
                                Industry leaders trust NuoData to unlock the
                                full potential of their data, driving innovation
                                and transformation
                            </h2>
                            <Image
                                src="/images/open.png"
                                height={50}
                                width={50}
                                alt="open"
                                className={container7Css.openImg}
                            />
                            <Image
                                src="/images/review.png"
                                height={150}
                                width={580}
                                alt="review"
                                className={container7Css.reviewImg}
                                style={{ margin: "0 auto" }}
                            />
                            <h4>
                                Industry leaders trust NuoData to unlock the
                                full potential of their data, driving innovation
                                and transformation
                            </h4>
                            <p>Ava Doe, Chief Data Officer, InnovateCorp</p>
                            <Image
                                src="/images/close.png"
                                height={50}
                                width={50}
                                alt="close"
                                className={container7Css.closeImg}
                            />
                        </div>
                        <div></div>
                        <div></div>
                    </Carousel>
                </div>
            </div>
        </>
    );
}
