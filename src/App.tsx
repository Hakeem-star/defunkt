/** @jsxImportSource @emotion/react */

import React, { useEffect } from "react";
import "./App.css";
import { Layout } from "antd";
import Head from "./components/Head";
import Body from "./components/Body";
import { defunktResponseType } from "./types/defunktResponseType";
import { useState } from "react";
import defunktResponse from "./mocks/defunktResponse.json";
import axios from "axios";
import { useParams } from "react-router-dom";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";

export const UserContext = React.createContext<defunktResponseType | undefined>(
  undefined
);

function App() {
  const [userState, setUserState] = useState();

  let { userName }: { userName: string } = useParams();
  userName = userName || "defunkt";

  useEffect(() => {
    let isMounted = true;
    axios.get(userName, { baseURL: "https://api.github.com/users/" }).then(
      (response) => {
        isMounted && setUserState(response.data);
      },
      (error) => {
        console.log(error.response.data);
        console.error(error);
      }
    );
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <UserContext.Provider value={userState}>
          <Layout>
            <Head />
            <Body />
          </Layout>
        </UserContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
