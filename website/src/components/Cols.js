import styled from "@emotion/styled"

export const Cols = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

export const Col = styled.div`
  flex: ${props => props.size || 0};
`
