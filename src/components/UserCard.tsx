/** @jsxImportSource @emotion/react */

import React, { ReactElement } from "react";
import { Button, Card, Col, Divider, Row } from "antd";
import getTimeDifference from "../util/getTimeDifference";
import { defunktResponseType } from "../types/defunktResponseType";
import { ReactComponent as RepoLogo } from "../assets/repo.svg";
import { css } from "@emotion/react";

const { Meta } = Card;

interface Props {
  data: defunktResponseType;
}
function getDate() {
  return new Date();
  //   return Date.parse(date + "");
}

export default function UserCard({ data }: Props): ReactElement {
  const {
    avatar_url,
    login,
    name,
    blog,
    created_at,
    html_url,
    updated_at,
    bio,
  } = data;

  const updatedDate = new Date(updated_at + "");

  const { year, month, week, day, hour, minute, second } = getTimeDifference(
    updatedDate,
    getDate()
  );
  console.log(updated_at);

  return (
    <Card
      title={
        <Row
          justify="space-between"
          align="middle"
          css={css`
            padding: 0 10px;
          `}
        >
          <Col>
            <a href={html_url} rel="noreferrer" target="_blank">
              {login}
            </a>
          </Col>
          <Button
            target="_blank"
            href={`${html_url}?tab=repositories`}
            type="link"
          >
            <Col
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              Visit Repo
              <Divider type="vertical" />
              <RepoLogo />
            </Col>
          </Button>
        </Row>
      }
    >
      <Card cover={<img alt={login} src={avatar_url} />}>
        <Meta
          title={name}
          description={`Profile was last updated ${year} years, ${month} months, ${day} days ago `}
        />
        {blog && (
          <>
            <Divider />
            <a href={blog}>{blog}</a>
          </>
        )}
        {bio && (
          <>
            <Divider />
            {bio}
          </>
        )}
      </Card>
    </Card>
  );
}
