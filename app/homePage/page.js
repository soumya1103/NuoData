import { ConfigProvider, theme, Carousel } from "antd";
import Container1Home from "@/components/Container1Home";
import Navbar from "@/components/Navbar";
import homePageCss from "../../styles/homePage.module.css";
import Container2Home from "@/components/Container2Home";

export default function HomePage() {
    return (
        <>
            <div className={homePageCss.outerContainer}>
                <Navbar />
                <hr className={homePageCss.customHr} />
                <Carousel>
                    <div>
                        <Container1Home />
                    </div>
                    <div>
                        <Container1Home />
                    </div>
                    <div>
                        <Container1Home />
                    </div>
                </Carousel>
            </div>
            <Container2Home />
        </>
    );
}
