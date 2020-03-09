import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Row, Col } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Card, Avatar } from "antd";
import { isiKartu } from "./module/Kertu";

const { Meta } = Card;

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const cardData = [
  {
    nama: "yasta",
    nim: "18/431740/SV/15711",
    job: "nganggur"
  },
  {
    nama: "dhika",
    job: "kontaktur"
  },
  {
    nama: "kalili",
    job: "diplomat"
  },
  {
    nama: "vava",
    job: "psycholo"
  },
  {
    nama: "vana",
    job: "farmako"
  }
];

function Kartu() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <LaptopOutlined />
                    subnav 2
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <NotificationOutlined />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <Row gutter={16}>
        <Col span={8}>
          {cardData.map(data => (
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={data.nama}
                description={data.job}
              />
            </Card>
          ))}
        </Col>
      </Row>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Kartu;
