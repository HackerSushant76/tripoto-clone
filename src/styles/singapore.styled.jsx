import styled from "styled-components";

export const VideoWrapper=styled.video`
    object-fit: cover;
    width:100%;
    height:310px;
    @media (max-width:1000px){
        height:100%;
    }
`

export const CrouselButton=styled.button`
     background-color:rgb(247,51,65);
     color:white; 
    width:200px;
     padding:20px 50px;
     border-radius: 18px;
     border:1px solid black; 
`

export const CrouselButtonImage=styled.img`
    width:100%;
`


export const ImageCrouselWrapper=styled.div`
    margin-top:40px;
    margin-bottom:40px;
`

export const SingaporeWrapper=styled.div`
margin:auto;
width:85%;
font-family:sans-serif;
@media (max-width:790px) {
    width:95%;
   
}
`