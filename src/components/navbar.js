import { colors } from "../utils/colors";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./css/Navbar.css";

const Navbar = ({ menu }) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <div
        style={{
          backgroundColor: colors.dark,
          height: "70px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: window.innerWidth / 12,
          }}
        >
          <Button
            className="menu"
            type="default"
            icon={<MenuOutlined />}
            onClick={() => setVisible(true)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: window.innerWidth / 2,
          }}
        >
          <h1 style={{ margin: "0px", color: colors.light }}>laundry-app</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: window.innerWidth / 2,
          }}
        >
          {/* <p style={{ fontSize: "20px", marginLeft: "20px" }}>
            <Link to={`/`}>Home</Link>
          </p> */}
          <Button>Home</Button>
          <Button>Register</Button>
          <Button>Login</Button>
          <Button>Profile</Button>

          {/* <p style={{ fontSize: "20px" }}>
            <Link to={`/register`}>register</Link>
          </p>
          <p style={{ fontSize: "20px" }}>
            <Link to={`/login`}>Login</Link>
          </p>
          <p style={{ fontSize: "20px" }}>
            <Link to={`/`}>Home</Link>
          </p> */}
        </div>
      </div>

      <Drawer
        title="Topics"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        open={visible}
      >
        {menu}
      </Drawer>
    </nav>
  );
};

export default Navbar;
