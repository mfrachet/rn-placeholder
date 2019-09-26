import React from "react"
import styled from "@emotion/styled"
import theme from "prism-react-renderer/themes/github"

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { Cols, Col } from "../../src/components/Cols"
import { Card } from "./Card"

const Preview = styled.div`
  padding: 1rem;
`

const Details = styled.div`
  padding: 1rem;
  text-align: center;
`

export const Snippet = ({ code, scope }) => (
  <Card>
    <LiveProvider code={code} scope={scope} theme={theme}>
      <Cols>
        <Col size={1}>
          <LiveEditor />
        </Col>
        <Col size={1}>
          <Preview>
            <LivePreview />
          </Preview>
        </Col>
      </Cols>

      <LiveError />
    </LiveProvider>

    <Details>
      This is an example using{" "}
      <a href="https://github.com/necolas/react-native-web" target="__blank">
        react-native-web
      </a>
      . If you want to run it on a real device,{" "}
      <a href="https://snack.expo.io/@mfrachet/84bb31" target="__blank">
        check this Snack project
      </a>
    </Details>
  </Card>
)
