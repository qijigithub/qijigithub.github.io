import React from 'react'
import styled from 'styled-components';
import {Button} from '../UI/button/Button'

export const ProjectSection = ({projects}) => {
    return (
        <ProjectContainer id='services'>
            <ProjectH1>Projects</ProjectH1>
            <ProjectsWrapper>
                { projects.map((project,index) => { 
                    return(        
                         
                    <ProjectCard key = {index}>
                         <ProjectIcon src={project.Icon}/>
                         <ProjectH2>{project.projectCatagory}</ProjectH2>
                     <ProjectP>{project.projectDetail}</ProjectP>
                     <Button to = "/project" primary = 'true'> Learn more</Button> 
                     </ProjectCard> 
                    )
                })
                }
            </ProjectsWrapper>
        </ProjectContainer>
    )
}
export default ProjectSection;

const ProjectContainer =styled.div`
height : 1000px;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#010606;

@media screen and (max-width:760px) {
    height:1300px;
}
@media screen and (max-width:480px) {
    height: 1500px;
}

`;
const ProjectH1 =styled.h1`
font-size:2.5rem;
color:#fff;
margin-bottom:64px;

@media screen and (max-width:480px) {
    font-size:2rem;
}
`;
const ProjectsWrapper=styled.div`
max-width:1000px;
margin:0 auto;
display: grid;
grid-template-columns:1fr 1fr 1fr;
align-items:center;
grid-gap:16px;
padding:0 50px;
// background:grey;

@media screen and (max-width:1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width:760px) {
    grid-template-columns: 1fr;
    padding:0 20px;
}
`;
const ProjectCard =styled.div`
background:#fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:30px;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform:scale(1.02)
    transition:all 0.2s ease-in-out;
    cursor:pointer;
}
`;
const ProjectIcon =styled.img`
height:160px;
width:160px;
margin-bottom:10px;
`;
const ProjectH2=styled.h2`
font-size:1rem;
margin-bottom:10px;
`;
const ProjectP=styled.div`
font-size:1rem;
text-align:center;
margin-bottom:10px;
`;