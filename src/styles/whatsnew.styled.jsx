import styled from "styled-components";


export const MainWhatsnew=styled.div`
    width:100%; 
`
export const SGWhatsnew = styled.div`
  
  margin-top:60px;
  h1{
     margin-bottom:4px;
     font-size:28px;
     font-weight:700;
     line-height:30.8px;

  }
  
  text{
     font-weight:400;
     font-size:16px;
     line-height:22px;
  }
  div {
    font-family: sans-serif;
    margin-bottom: 18px;
  }
`;

export const SGWhatsnewCardWrapper=styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  width:100%;
  @media (max-width:1000px){
    flex-direction:column;
  }
`

export const SGWhatsnewCard = styled.div`
 box-sizing: border-box;
 width:23%;

img{
    width:100%;
    height:60%;
    border-radius:5px;
   }
  
   h5{
    color:rgb(255,102,51);
    font-size:12px;
    font-weight:700;
    margin-top:-10px;
    line-height: 17.14px;
   }
   h3{
    width:100%;
    cursor:pointer;
    font-size:16px;
    font-weight:700;
    line-height: 25.18px;
    margin-top:3px;
   }
   @media (max-width:1000px){
    width:100%;
    height:500px;
     img{
        width:100%;
        height:80%;
     }
   }
`;



export const WhatsnewButtonWrapper=styled.div`
  
    width:250px;
    margin:auto;
    margin-top:-30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    button{
        display: flex;
        align-items: center;
        border-radius: 30px;
        border:1px solid rgb(247,51,65);
        padding:7px 13px;
        padding-right:28px;
        color:rgb(247,51,65);
        background-color: white;
        font-size:14px;
        font-weight:700;
        font-family:sans-serif;
    }
`

