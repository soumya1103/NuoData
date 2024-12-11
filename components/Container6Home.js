import Image from "next/image";
import container6Css from "../styles/container6.module.css";

export default function Container6Home() {
    return (
        <>
            <div className={container6Css.outerContainer}>
                <h1>
                    Trusted by Innovative{" "}
                    <span style={{ color: "#e74860" }}>Companies</span>
                </h1>
            </div>
            <div className={container6Css.companiesOuter}>
                <div className={container6Css.companiesInner}>
                    <Image
                        src="/images/azure-c6.png"
                        height={30}
                        width={100}
                        alt="azure"
                    />
                    <Image
                        src="/images/databricks-c6.png"
                        height={30}
                        width={60}
                        alt="databricks"
                    />
                    <Image
                        src="/images/amex-c6.png"
                        height={30}
                        width={90}
                        alt="amex"
                    />
                    <Image
                        src="/images/ibm-c6.png"
                        height={30}
                        width={70}
                        alt="ibm"
                    />
                    <Image
                        src="/images/aws-c6.png"
                        height={30}
                        width={50}
                        alt="aws"
                    />
                    <Image
                        src="/images/gcp-c6.png"
                        height={30}
                        width={70}
                        alt="gcp"
                    />
                    <Image
                        src="/images/snowflake-c6.png"
                        height={30}
                        width={140}
                        alt="snowflake"
                    />
                    <Image
                        src="/images/salesforce-c6.png"
                        height={30}
                        width={50}
                        alt="salesforce"
                    />
                </div>
            </div>
            {/* <Image
                src="/images/companies-c6.png"
                height={100}
                width={1518}
                alt="companies"
            /> */}
        </>
    );
}
