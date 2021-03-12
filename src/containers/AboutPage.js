import React from 'react'
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimeLineUnit from '../components/UI/card/TimeLineUnit'
import {AboutData} from '../components/data/AboutData';
import MatrixRain from '../components/about/MatrixRain';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    // root: {
    //     flexGrow: 1,
    //   },
    //   paper2: {
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   },
  }));

export const AboutPage = () => {

    const classes = useStyles();

    return (
        <AboutContainer >
        {/* <MatrixRain/> */}
            <AboutWrapper>
            <AboutH1>{AboutData.title}</AboutH1>

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item >
          <Paper className={classes.paper} xs={12}>
          <Timeline align="alternate">
      {AboutData.timeline.map((timeline, idx)=>(
      <TimeLineUnit key ={idx} timeline={timeline}/> 
        ))}
    </Timeline>
          </Paper>
        </Grid>
        {/* <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
          I Like: 
              {
                  AboutData.likeGrid.map(like=>(
                    <li>
                        {like}
                    </li>
                  ))
              }
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              {
                  AboutData['Web Development'].map((skill,idx)=>{
                    <p key= {idx}>
                    {skill}
                </p>
                  })
              }
              </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>

        <Grid item >
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid> */}
      </Grid>
    </div>

{/* 
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div> */}


            </AboutWrapper>
        </AboutContainer >
    )
}

const AboutContainer = styled.div`
// top:60px;
display: flex;
width: 100%;
height:100vh;
flex-direction: row;
flex-wrap: wrap;
// background: #000;
@media screen and (max-width:1200px) {
    flex-direction: column;
}
`

const AboutWrapper = styled.div`
padding: 2rem;
margin-top:60px;
width: 100%;
background: #f5f5f5;
// display: inline-block;
@media screen and (max-width: 1200px){
    width: 100%;
    height:100%;
    // display: inline-block;
}
@media screen and (max-width: 760px){
    width: 100%;
    height:100%;
    // display: inline-block;
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
