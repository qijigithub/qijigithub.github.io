import React from 'react'
import styled from "styled-components";
import {Button} from '../UI/button/Button';
import  { bottonLinkData, buttonLinkData } from '../data/MenuData';

const AboutSection = ({
    heading,
    paragraph1,
    paragraph2,
    buttonLabel,
    reverse,
    profileImg,

}) => {
    return(
        <Section>
            <Container>
                <ColumnLeft>
                <h1>{heading}</h1>
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
                <Button to= {buttonLinkData.Resume} primary ='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse = {reverse}>
                <img  src= {profileImg} alt={'home'}/>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default AboutSection

const Section = styled.section`
width: 100%;
height:100%;
padding: 4rem 0rem;
`
const Container = styled.div`
padding:3rem calc((100vw - 1300px) / 2);
display:grid;
grid-template-columns: 2fr 1.5fr;
grid-template-rows:500px;

@media screen and (max-width: 760px){
    grid-template-columns: 1fr;
}
`
const ColumnLeft = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
line-height:1.4;
padding: 1rem 2rem;
order:${({reverse})=>(reverse?'2':'1')};

h1{
    margin-bottom: 1rem;
    font-size:clamp(.5rem,6vw,2rem);
}
p{
    margin-bottom:2rem;
}
`
const ColumnRight= styled.div`
padding:1rem 1rem;
order:${({reverse})=>(reverse?'1':'2')};
display:flex;
justify-content:center;
align-itmes:center;
@media screen and (max-width: 760px){
    order:${({reverse})=>(reverse?'2':'1')};
}

img {
    width:33vh;
    height:100%;
    boject-fit:cover;

    @media screen and(max-width:760px){
        width:90%;
        height:90%
    }
}
`
const ProfileImg =styled.img`
// height: 500px;
`;