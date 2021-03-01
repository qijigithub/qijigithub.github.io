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
width: calc(100% - 30%);
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
const ResumePaper = styled.div`
margin: 2rem 0rem;
background: #fff;
border: 1px solid #D8D8D8;
padding: 2rem;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media screen and (max-width: 760px){
    margin: 2rem 0rem;
    padding: 2rem 0rem;
    box-shadow: none;
}
`
const Header1 = styled.h1`
font-family: 'Alfa Slab One', cursive;
padding:1rem;
`
const Header2 = styled.ul`
font-family: 'Alata', sans-serif;
display: inline-block;
padding:1rem;
`
const Space = styled.div`
padding: 10px;
`
