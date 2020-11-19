import React, { ReactElement } from "react";
import { Card, Divider } from "antd";
import getTimeDifference from "../util/getTimeDifference";
import { defunktResponseType } from "../types/defunktResponseType";

const { Meta } = Card;

interface Props {
  data: defunktResponseType;
}
function getDate() {
  return new Date();
  //   return Date.parse(date + "");
}

export default function UserCard({ data }: Props): ReactElement {
  const { avatar_url, login, name, blog, created_at, updated_at, bio } = data;

  const updatedDate = new Date(updated_at + "");

  const { year, month, week, day, hour, minute, second } = getTimeDifference(
    updatedDate,
    getDate()
  );
  console.log(updated_at);

  return (
    <Card title={login}>
      <Card cover={<img alt={login} src={avatar_url} />}>
        <Meta
          title={name}
          description={`Profile was last updated ${year} years, ${month} months, ${day} days ago `}
        />
        <Divider />
        {blog}
        <Divider />
        {bio}
      </Card>
    </Card>
  );
}
