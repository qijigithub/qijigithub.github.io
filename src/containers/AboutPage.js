import React from 'react'
import styled from "styled-components";

export const AboutPage = () => {
    return (
        <AboutContainer >
            <AboutWrapper>
            <AboutH1>About Me</AboutH1>
            <p>This is about page, still building...</p>
            </AboutWrapper>
        </AboutContainer >
    )
}

const AboutContainer = styled.div`
top:60px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
background: #f5f5f5;
@media screen and (max-width:1200px) {
    flex-direction: column;
`

const AboutWrapper = styled.div`
padding: 2rem;
margin-top:60px;
// width: calc(100% - 30%);
background: #f5f5f5;
display: inline-block;
@media screen and (max-width: 1200px){
    width: 100%;
    height:100%;
    display: inline-block;
}
@media screen and (max-width: 760px){
    width: 100%;
    height:100%;
    display: inline-block;
    padding:5px;
}
`
const AboutH1 =styled.h1`
font-size:2.5rem;
color:#000;
// margin-bottom:64px;
font-family: 'Alfa Slab One', cursive;

@media screen and (max-width:480px) {
    font-size:2rem;
}
`;
