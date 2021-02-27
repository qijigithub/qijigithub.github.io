import React from 'react'
import  styled from 'styled-components';
import  { AboutData } from '../data/AboutData';

export const AboutContainer = () => {
    return (
        <AbContainer>
            <ProfileImg src= {AboutData.profileImg} alt={AboutData.alt}/>
            <ProfileText>
            <p1>{AboutData.title}</p1>
            <br/>
            <p2>{AboutData.detail1}</p2>
            <br/>
            <p2>{AboutData.detail2}</p2>
            </ProfileText>

        </AbContainer>
    )
}



const AbContainer= styled.div`
width:60%;
height:330px;
background-color:#fff;
border-radius:20px;
box-shadow:2px 2px 2px 12px rgba(0,0,0, 0.2);
display:flex;
margin:-5% auto 20px auto;
position:relative;
z-index:3;
justify-content:space-evenly;
align-items:center;
`
const ProfileText =styled.div`
width: 300px;
p1{
    color:#403e3e;
    font-family:myriad pro;
    font-weight:bold;
    font-size:30px;
    line-height:0px;

}
p2{
    color:#3e3d3d;
    font-family:myriad pro;
    font-weight:bold;
    font-size:18px;
    line-height:5px;
}
br{
    height: 100px;
}
`

const ProfileImg =styled.img`
height: 300px;
`;