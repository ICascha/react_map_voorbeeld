import {
  QuestionCircleOutlined,
  BarChartOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import "./Layout.css";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

type Props = {
  children?: React.ReactNode;
};

const Main = (props: Props) => {
  const nav = useNavigate();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: "Dashboard",
              icon: React.createElement(BarChartOutlined),
              onClick: () => nav("dashboard"),
            },
            {
              key: "2",
              label: "Anomalies",
              icon: React.createElement(ExclamationCircleOutlined),
              onClick: () => nav("anomalies"),
            },
            {
              key: "3",
              label: "About",
              icon: React.createElement(QuestionCircleOutlined),
              onClick: () => nav("about"),
            },
          ]}
        />
      </Sider>
      <Layout style={{ height: "100vh" }}>{props.children}</Layout>
    </Layout>
  );
};

export default Main;
