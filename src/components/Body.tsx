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
      <Row justify="center">
        <Col span={12}>
          <Row align="middle">
            <Col span={12}>
              <UserCard data={data} />
            </Col>
            <Col span={12}>
              <UserStats data={data} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
  );
}
