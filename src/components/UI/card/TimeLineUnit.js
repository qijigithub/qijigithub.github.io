import React from 'react';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

/*
{
    Title:'',
    description:'',
    DotColor:''  //'grey'| 'inherit'| 'primary'| 'secondary'
    Icon:'',

}
*/
const TimeLineUnit = (props) => {
    const {timeline} = props;
    const classes = useStyles();
    return (
        <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={timeline.dotColor} >
            <TimelineIcon src={timeline.icon}/>
          </TimelineDot>
          {timeline.id === 'time1'?<></>: <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {timeline.title}
            </Typography>
            <Typography>{timeline.description}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    )
}

const TimelineIcon =styled.img`
height:24px;
width:24px;
// margin-bottom:10px;
`;

export default TimeLineUnit
