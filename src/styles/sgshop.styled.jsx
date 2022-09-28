import styled from "styled-components";

export const SGShopWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  text {
    font-size: 16px;
    letter-spacing: 0.7px;
    line-height: 23px;
  }
  div {
    font-family: sans-serif;
    margin-bottom: 18px;
  }
`;
export const SGShopCard = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    border: 1px solid red;
  }
`;

export const SGShopCardIndividual = styled.div`
  width: 355px;
  margin-right: 15px;
  img {
    width: 100%;
    height: 60%;
    border-radius: 5px;
  }
  @media (max-width: 1000px) {
    border: 1px solid green;
    width: 100%;
    height: auto;
    img {
      height: 70%;
    }
  }
`;
