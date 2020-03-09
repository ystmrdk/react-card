import React from "react";
import { Card, Avatar } from "antd";
import { Row, Col } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { Meta } = Card;

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

function isiKartu() {
  return (
    <div className="App">
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
    </div>
  );
}

export default isiKartu;
