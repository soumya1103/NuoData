import React from "react";
import { Tabs } from "antd";
import container8Css from "../styles/container8.module.css";
import Tab1 from "./Tab1";

const items = [
    {
        key: "1",
        label: "Astra",
        children: <Tab1 />,
    },
    {
        key: "2",
        label: "Nova AI",
        children: <Tab1 />,
    },
    {
        key: "3",
        label: "Quantum",
        children: <Tab1 />,
    },
    {
        key: "4",
        label: "Maestro",
        children: <Tab1 />,
    },
    {
        key: "5",
        label: "Spectra",
        children: <Tab1 />,
    },
    {
        key: "6",
        label: "Guardian",
        children: <Tab1 />,
    },
    {
        key: "7",
        label: "TransformX",
        children: <Tab1 />,
    },
];
export default function Container8Home() {
    return (
        <>
            <div className={container8Css.outerContainer}>
                <div className={container8Css.innerContainer}>
                    <Tabs
                        tabBarGutter={105}
                        defaultActiveKey="1"
                        items={items}
                    />
                </div>
            </div>
        </>
    );
}
