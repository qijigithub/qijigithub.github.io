import React from 'react'
import styled from "styled-components";
import Sidebar from '../components/navigation/sidebar/Sidebar';
import { Divider } from "@material-ui/core";
import WorkExperienceSection from '../components/resume/WorkExperienceSection';
import EducationSection from '../components/resume/EducationSection';
import ProjectExperienceSection from '../components/resume/ProjectExperienceSection';
import {ResumeCataData} from '../components/data/ResumCataData';


export const ResumePage = () => {
    return (
        <>

        <ResumeContainer>
        <ResumeRWrapper>
        <ResumePaper>
        <Header1>
            Resume
        </Header1>
        {/* <Header2>Education</Header2> */}
        {
            ResumeCataData.map((sect)=>(
                <Header2 key={sect.id}>{sect.title}</Header2>    
            ))
        }
        <Space/>
        <Divider/>
        <WorkExperienceSection/>
        <Divider/>
        <EducationSection/>
        <Divider/>
        <ProjectExperienceSection/>
        <Divider/>
        </ResumePaper>
        </ResumeRWrapper>
        <Sidebar />
        </ResumeContainer>
        </>
    )
}

const ResumeContainer = styled.div`
// width:1000px;
top:60px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
background: #f5f5f5;
@media screen and (max-width:1200px) {
    flex-direction: column;
`

const ResumeRWrapper = styled.div`
padding: 2rem;
margin-top:60px;
// margin-left: 35%;
min-width: calc(100% - 450px);
// border: 1px solid black;
background: #f5f5f5
@media screen and (max-width: 1200px){
    width: 100%;
    height:100%;
    display: inline-block;
}
`
const ResumePaper = styled.div`
margin: 1rem;
background: #fff;
border: 1px solid #D8D8D8;
padding: 2rem;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Header1 = styled.h1`
font-family: 'Alata', sans-serif;
`
const Header2 = styled.ul`
font-family: 'Alata', sans-serif;
display: inline-block;
padding:1rem;
`
const Space = styled.div`
padding: 10px;
`
