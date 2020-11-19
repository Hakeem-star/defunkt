/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Row, Col } from "antd";
import { Layout } from "antd";
import React, { ReactElement } from "react";
const { Header } = Layout;

export default function Head(): ReactElement {
  return (
    <Header>
      <Row
        css={css`
          color: white;
        `}
      >
        <Col span={3}>GitHub Preview</Col>
      </Row>
    </Header>
  );
}
