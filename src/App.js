import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { useState } from "react";
import TopicMenu from "./components/topicMenu";
import Sidebar from "./components/sidebar";
import { Layout } from "antd";
import { Card } from "antd";
import { colors } from "./utils/colors";

const { Meta } = Card;

function App() {
  const topics = ["First topic", "Second topic", "Third topic"];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  const services = ["washing", "ironing", "cleaning", "dry clean"];
  return (
    <div className="App">
      <Navbar menu={Menu} />
      <Layout
        style={{
          backgroundColor: colors.whiteGray,

          height: window.innerHeight / 3,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "40px",
          }}
        >
          {services.length > 0 &&
            services.map((item) => {
              return (
                <Card
                  hoverable
                  style={{
                    width: window.innerWidth / 4 - 40,
                  }}
                  size="small"
                >
                  <img
                    alt="example"
                    src={require("../src/images/washing.png")}
                    style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "scale-down",
                    }}
                  />
                  <Meta title={item} />
                </Card>
              );
            })}
        </div>

        {/* <Sidebar menu={Menu} /> */}
        {/* <Layout.Content className="content">
          {topics[contentIndex]}
        </Layout.Content> */}
      </Layout>
    </div>
    // <Navbar/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
