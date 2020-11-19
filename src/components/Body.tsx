/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { ReactElement, useContext } from "react";
import { UserContext } from "../App";
import UserCard from "./UserCard";
import UserStats from "./UserStats";

export default function Body({}): ReactElement {
  const data = useContext(UserContext);

  if (!data) {
    return <></>;
  }
  return (
    <Content>
      <Row
        justify="center"
        css={css`
          padding-top: 50px;
        `}
        align="middle"
      >
        <Col span={14}>
          <Row gutter={[50, { sm: 50 }]} align="middle">
            <Col lg={12} sm={24}>
              <UserCard data={data} />
            </Col>
            <Col lg={12} sm={24}>
              <UserStats data={data} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
  );
}
