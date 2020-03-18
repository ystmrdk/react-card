import React from "react";

import { Card, Avatar } from "antd";

const { Meta } = Card;

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "1",
      name: "Yasta",
      job: "Nganggur"
    };
  }

  render() {
    return (
      <div>
        <h3> This is stateful component</h3>

        <Card
          style={{ width: 200 , marginLeft: 50}}
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
            title={this.state.name}
            description={this.state.job}
          />
        </Card>
      </div>
    );
  }
}

export default Test;
