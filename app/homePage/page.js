import { ConfigProvider, theme, Carousel } from "antd";
import Container1Home from "@/components/Container1Home";
import Navbar from "@/components/Navbar";
import homePageCss from "../../styles/homePage.module.css";

export default function HomePage() {
    return (
        <div className={homePageCss.outerContainer}>
            <Navbar />
            <hr className={homePageCss.customHr} />
            <Carousel>
                <div className={homePageCss.boxParent}>
                    <div>
                        <Container1Home />
                    </div>
                </div>
                <div>
                    <Container1Home />
                </div>
                <div>
                    <Container1Home />
                </div>
            </Carousel>
        </div>
    );
}
