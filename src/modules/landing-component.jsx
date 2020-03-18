import React from "react";
import "./landing-component.css";
import { Card, Avatar } from "antd";

const { Meta } = Card;

class LandingComp extends React.Component {
  render() {
    return (
      <div>
        <h3>Ini menggunakan props </h3>
        <ul>
          <li>
            <MyComp nama="Yasta" job="Apa Hayo" />
          </li>
          <li>
            <MyComp nama="Mardika" job="Pengacara" />
          </li>
        </ul>
      </div>
    );
  }
}

const MyComp = data => {
  return (
    <Card
      style={{ width: 200 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={data.nama}
        description={data.job}
      />
    </Card>
  );
};

export default LandingComp;
