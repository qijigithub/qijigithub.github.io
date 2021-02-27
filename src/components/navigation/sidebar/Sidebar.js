import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
import {SideBar } from '../../data/SidebarData';
import { Button } from '../../UI/button/Button';

const Sidebar = () => {
  return (
    <>
      <SidebarNav>
      <Space/>
        <SidebarWrap>
          <ProfileSection>
            <ProfileImg>
              <img src={SideBar.profileImg} alt={"profile"} />
            </ProfileImg>
            <Name>{SideBar.name}</Name>
            <Email>qijilearn@gmail.com </Email>
            <Divider variant="middle" />
          </ProfileSection>
          <DetailSection>
            <DetailsH1>About Me</DetailsH1>
            <DetailsP>{SideBar.details}</DetailsP>
            <Button to= {SideBar.detailsLink} primary ='true'>Contact me</Button>
            <Space/>
            <Divider variant="middle" />
            <Space/>
          </DetailSection>
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};
const SidebarNav = styled.div`
  background: #f5f5f5;
  width: 450px;
  // padding: 10px;
  height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
  margin-top: 60px;
//   transition: 350ms;
//   z-index: 2;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height:100%;
    display: inline-block;
    // letter-spacing: normal;
    // word-spacing: normal;
    // vertical-align: top;
    // text-rendering: auto;
    // z-index: 40; 
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
//   padding: 50px;

`;

const ProfileSection = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-itmes: center;
  flex-direction: column;
  box-sizing: border box;
  img {
    boject-fit: cover;
    width: 13em;
    border-radius: 50%;
    display: block;
  }
  a {
    text-decoration: none;
  }
  h1 {
    margin-top:15px;
    margin-bottom:5px;
}
p {
    margin-top:5px;
    margin-bottom:40px;
}
`;
const DetailSection = styled.section`
padding: 0rem 2rem;
display: flex;
justify-content: center;
align-itmes: center;
flex-direction: column;
box-sizing: border box;
`

const ProfileImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
const Email = styled.p`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: #5f5f5f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
  text-decoration: none;
  list-style: none;
  &:hover {
    color: #5e5e5e;
  }
`;

const Name = styled.h1`
  list-style: none;
  font-family: 'Press Start 2P', cursive;
  font-weight: bold;
  color: grey;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    margin-bottom : 0 0 ;
    }
`;

const DetailsH1 = styled.h1`
font-family: 'Roboto', sans-serif;
color: grey;
`
const DetailsP = styled.p`
font-family: 'Roboto', sans-serif;
color: grey;
`
const Space = styled.div`
padding : 20px;
`
export default Sidebar;
