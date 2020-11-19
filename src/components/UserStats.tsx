/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Card, Col, Divider, Row, Statistic } from "antd";
import React, { ReactElement } from "react";
import { defunktResponseType } from "../types/defunktResponseType";

interface Props {
  data: defunktResponseType;
}

export default function UserStats({ data }: Props): ReactElement {
  const { public_repos, public_gists, followers, following, updated_at } = data;

  return (
    <Card>
      <Row>
        <Col span={12}>
          <Statistic title="Public Repos" value={public_repos} />
        </Col>
        <Col span={12}>
          <Statistic title="Public Gists" value={public_gists} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Statistic title="Followers" value={followers} />
        </Col>

        <Col span={12}>
          <Statistic title="Following" value={following} />
        </Col>
      </Row>
    </Card>
  );
}
