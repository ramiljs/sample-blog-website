import { CSSProperties } from "react";
import styled from "@emotion/styled";


export const layoutContainerStyle: CSSProperties = {
  marginTop: "30px"
}

export const ulStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly"
}

export const liStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  fontSize: "20px",
}

export const wrapStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  columnGap: "20px"
}

export const langButtonStyle: CSSProperties = {
  color: "#999",
  fontSize: "20px"
}

export const themeButtonStyle: CSSProperties = {
  color: "#999",
  fontSize: "20px"
}

const CardWrapper = styled.div`
  @media screen and (min-width: 320px) and (max-width: 480px){
    
  }

  @media screen and (min-width: 481px) and (max-width: 768px){

  }

  @media screen and (min-width: 769px) and (max-width: 1024px){

  }

  @media screen and (min-width: 1025px) and (max-width: 1200px){

  }

  @media screen and (min-width: 1201px){
    
  }
`;