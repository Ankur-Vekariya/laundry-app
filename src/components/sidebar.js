import React from "react";
import { Layout } from "antd";
import "./css/Sidebar.css";

const Sidebar = ({menu}) => {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
    </Layout.Sider>
  );
};

export default Sidebar;
