import Image from "next/image";
import container3Css from "../styles/container3.module.css";
import container2Css from "../styles/container2.module.css";

export default function Container3Home() {
    return (
        <>
            <div className={container3Css.centerAlign}>
                <Image
                    src="/images/flowchart1-C3.png"
                    alt="flowchart1"
                    height={550}
                    width={1100}
                />
            </div>
            <h2 className={container2Css.heading}>
                NuoData Universe Unmatched Flexibility & Ownership
            </h2>
            <p className={container2Css.subheading}>
                NuoData is cloud Agnostic
            </p>
        </>
    );
}
