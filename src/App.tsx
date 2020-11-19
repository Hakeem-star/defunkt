/** @jsxImportSource @emotion/react */

import React, { useEffect } from "react";
import { Button, Col, Row } from "antd";
import "./App.css";
import { Layout } from "antd";
import Head from "./components/Head";
import Body from "./components/Body";
import { css } from "@emotion/react";
import { defunktResponseType } from "./types/defunktResponseType";
import { useState } from "react";
import defunktResponse from "./mock/defunktResponse.json";
const { Footer } = Layout;

export const UserContext = React.createContext<defunktResponseType | undefined>(
  undefined
);

function App() {
  const [userState, setUserState] = useState(defunktResponse);
  useEffect(() => {
    setUserState(defunktResponse);
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={userState}>
        <Layout
          css={css`
            height: 100vh;
          `}
        >
          <Head />
          <Body />
          <Footer>Footer</Footer>
        </Layout>
      </UserContext.Provider>
    </div>
  );
}

export default App;
