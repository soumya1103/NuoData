import { Carousel } from "antd";
import Container1Home from "@/components/Container1Home";
import Navbar from "@/components/Navbar";
import homePageCss from "../../styles/homePage.module.css";
import Container2Home from "@/components/Container2Home";
import Container3Home from "@/components/Container3Home";
import Container4Home from "@/components/Container4Home";
import Container5Home from "@/components/Container5Home";
import Footer from "@/components/Footer";
import Container6Home from "@/components/Container6Home";
import Container7Home from "@/components/Container7Home";
import Container8Home from "@/components/Container8Home";

export default function HomePage() {
    return (
        <>
            <div className={homePageCss.outerContainer}>
                <Navbar />
                <hr className={homePageCss.customHr} />
                <div className="container1">
                    <Carousel autoplay>
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
            </div>
            {/* <Container2Home /> */}
            {/* <Container3Home /> */}
            <Container8Home />
            {/* <Container4Home /> */}
            {/* <Container5Home /> */}
            {/* <Container6Home /> */}
            {/* <Container7Home /> */}
            {/* <Footer /> */}
        </>
    );
}
