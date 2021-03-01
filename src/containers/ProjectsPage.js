import React from 'react'
import styled from "styled-components";
import Sidebar from '../components/navigation/sidebar/Sidebar';
export const ProjectsPage = () => {
    return (
        <ProjectContainer>
            <ProjectWrapper>
           this is projects page, still building...
           </ProjectWrapper>
           <Sidebar />
        </ProjectContainer>
    )
}


const ProjectContainer = styled.div`
top:60px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
background: #f5f5f5;
@media screen and (max-width:1200px) {
    flex-direction: column;
`

const ProjectWrapper = styled.div`
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