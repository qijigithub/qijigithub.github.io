import React from 'react'
import styled from "styled-components";
import Sidebar from '../components/navigation/sidebar/Sidebar';
import {ProjectsCataData } from '../components/data/ProjectsCataData';
import { Divider } from "@material-ui/core";
import { Accordion } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export const ProjectsPage = () => {
    const classes = useStyles();
    return (
        <ProjectContainer>
            <ProjectWrapper>
           <ProjectPaper>
           <Header1>
            Projects
        </Header1>
        {
            ProjectsCataData.map((sect,index)=>(
                <Header2 key={index}>{sect.projectCatagory}</Header2>    
            ))
        }
        <Space/>
        <Divider/>

        <Space/>
        {
            ProjectsCataData.map((sect,index)=>(
                        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         key={index}> 
         <Typography className={classes.heading}>
         {sect.projectCatagory}
         </Typography>
        </AccordionSummary>   
        <AccordionDetails>
          <Typography>
          {sect.projectDetail}
          </Typography>
        </AccordionDetails>

        </Accordion>
            ))
        }
        
           </ProjectPaper>
           </ProjectWrapper>
           <Sidebar />
        </ProjectContainer>
    )
}

const Header2 = styled.ul`
font-family: 'Alata', sans-serif;
display: inline-block;
padding:1rem;
`
const Space = styled.div`
padding: 10px;
`

const Header1 = styled.h1`
font-family: 'Alfa Slab One', cursive;
padding:1rem;
`

const ProjectPaper = styled.div`
margin: 2rem 0rem;
background: #fff;
border: 1px solid #D8D8D8;
padding: 2rem;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media screen and (max-width: 760px){
    margin: 2rem 0rem;
    padding: 2rem 0rem;
    box-shadow: none;
}
`

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