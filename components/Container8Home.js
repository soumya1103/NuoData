import React from "react";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
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
        children: "Content of Tab Pane 2",
    },
    {
        key: "3",
        label: "Quantum",
        children: "Content of Tab Pane 3",
    },
    {
        key: "4",
        label: "Maestro",
        children: "Content of Tab Pane 3",
    },
    {
        key: "4",
        label: "Spectra",
        children: "Content of Tab Pane 3",
    },
    {
        key: "5",
        label: "Guardian",
        children: "Content of Tab Pane 3",
    },
    {
        key: "6",
        label: "TransformX",
        children: "Content of Tab Pane 3",
    },
];
export default function Container8Home() {
    return (
        <>
            <div className={container8Css.outerContainer}>
                <div className={container8Css.innerContainer}>
                    <Tabs
                        tabBarGutter={135}
                        defaultActiveKey="1"
                        items={items}
                    />
                </div>
            </div>
        </>
    );
}
