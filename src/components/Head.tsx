import { Row, Col } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { ReactElement } from "react";
import defunktResponse from "../mock/defunktResponse.json";
interface Props {}

export default function Head({}: Props): ReactElement {
  return (
    <Header>
      <Row>
        <Col span={6}>GitHub Preview</Col>
        <Col span={6}>{defunktResponse.login}</Col>
      </Row>
    </Header>
  );
}
