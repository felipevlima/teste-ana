import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border: 1px solid #dedfe4;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;

  h2 {
    margin: 0;
    padding: 0;
  }

  p {
    text-align: start;
  }
`