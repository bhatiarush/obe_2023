import "./App.css";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import TabBar from "./Navbar";

const { Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width={80}
        theme="light" // You can change the theme to "dark" if you prefer
      >
        <div className="logo" />
        <Menu theme="light" mode="vertical" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DesktopOutlined />} />
          <Menu.Item key="2" icon={<PieChartOutlined />} />
          <Menu.Item key="3" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "16px" }}>
          <TabBar />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
