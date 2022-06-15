import React, { FC, useState } from 'react';
import 'antd/dist/antd.css';

import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';

import { cache } from '../cache'

import { AppContext, UserInfo } from './AppContext'
import Keycloak, { KeycloakInstance } from 'keycloak-js';

import { Button, Col, Row, Spin } from "antd";
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { LogoutOutlined } from "@ant-design/icons"
import { AppTabs } from './AppTabs';

export const App: FC = () => {

  const [keycloak, setKeycloak] = useState<KeycloakInstance>(Keycloak('/keycloak.json'))
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<UserInfo>()

  const initClient = () => {

    if (!apolloClient) {
      return new ApolloClient({
        cache: cache,
        uri: process.env.NODE_ENV === 'production' ? process.env.DS_ENDPOINT : '/graphql',
        headers: {
          "Authorization": "Bearer " + keycloak.token
        }
      })
    }
  }

  var apolloClient: ApolloClient<NormalizedCacheObject> | undefined

  console.log("process.env.DS_ENDPOINT:" + process.env.DS_ENDPOINT)

  if (authenticated) {
    apolloClient = initClient()

    if (!userInfo) {
      keycloak.loadUserInfo().then(value => {
        setUserInfo(value as UserInfo)
      })
    }

    if (userInfo) {
      return (
        <AppContext.Provider value={{ keycloak: keycloak, userInfo: userInfo }}>
          <ApolloProvider client={apolloClient!}>
            <Layout>
              <Header>
                <Row>
                  <Col span={22}>
                  </Col>
                  <Col span={2}>
                    <Button onClick={() => keycloak.logout()}>
                      <LogoutOutlined />
                    </Button>
                  </Col>
                </Row>
              </Header>
              <Content>
                <AppTabs />
              </Content>
            </Layout>
          </ApolloProvider>
        </AppContext.Provider>
      )
    }
  } else {
    keycloak.init({ onLoad: 'login-required' }).then(auth => {
      setKeycloak(keycloak)
      setAuthenticated(auth)
    })
  }

  return (
    <Spin style={{
      margin: 0,
      position: "absolute",
      top: "45%",
      left: "45%"
    }} tip="...Authentication process..." size={"large"} />
  )
}