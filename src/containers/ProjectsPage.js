import React from 'react'
import styled from "styled-components";
import Sidebar from '../components/navigation/sidebar/Sidebar';
import {ProjectsCataData } from '../components/data/ProjectsCataData';
import { Divider } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
import MCard from '../components/UI/card/MCard';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.h3 ,
      fontFamily: `'Alata', sans-seri`,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
      },
      details: {
        alignItems: 'center',
      },
      column: {
        flexBasis: '43.33%',
      },
      helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
      },
      link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
  }));



const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
    details: {
        alignItems: 'center',
      },
      column: {
        flexBasis: '33.33%',
      },
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);


export const ProjectsPage = (props) => {
    const classes = useStyles();
    const {openIdx} = props;
    return (
        <ProjectsContainer>
            <ProjectsWrapper>
           <ProjectPaper>
           <Header1>
            Projects
        </Header1>

        <Space/>
        {
            ProjectsCataData.map((sect,index)=>(
        <Accordion 
        key={index} 
        defaultExpanded={index===1}
        square  >
        <AccordionSummary 
        aria-controls="panel1d-content" 
        expandIcon={<ExpandMoreIcon />} >
          <div className={classes.column}>
            <Typography className={classes.heading}>{sect.projectCatagory}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{sect.projectDetail}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <PContainer >
              {   sect.projects.length == 0?
              <Header2>Coming soon ... </Header2>
              :
                  sect.projects.map((project,index)=>(
                    <MCard key={index} project={project}/>
                  ))
                
              }
          </PContainer>
        </AccordionDetails>
      </Accordion>
            ))
        }


        
           </ProjectPaper>
           </ProjectsWrapper>
           <Sidebar />
        </ProjectsContainer>
    )
}

const Header2 = styled.h2`
// font-family: 'Alata', sans-serif;
// font-family: 'Alfa Slab One', cursive;
// font-family: 'Miriam Libre', sans-serif;
// font-family: 'Roboto', sans-serif;
padding:1rem;
`

const PContainer =styled.div`
display:column;
padding:20px;
@media screen and (max-width: 760px){
    padding:0px;
}
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
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media screen and (max-width: 760px){
    margin: 2rem 0rem;
    padding: 2rem 0rem;
    box-shadow: none;
}
`

const ProjectsContainer = styled.div`
top:60px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
background: #f5f5f5;
@media screen and (max-width:1200px) {
    flex-direction: column;
`

const ProjectsWrapper = styled.div`
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