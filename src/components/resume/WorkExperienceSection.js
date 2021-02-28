import React from 'react'
import styled from 'styled-components';
import {WorkExperienceData} from '../data/resume/WorkExperienceData';

const WorkExperienceSection = () => {
    return (
        <>
            <Header>Work Experience</Header>
            {
                WorkExperienceData.map((workexp)=>(
                    <ContentContainer key={workexp.id}>
                    <Title >{`Job Title : ${workexp.JobTitle}`}</Title>
                    <DateRange >{workexp.DateRange}</DateRange>
                    <SubTitle>{`Organization name : ${workexp.Organization}`}</SubTitle>
                    <DescContainer>
                    {
                        workexp.Descriptions.map((desc,index)=>(
                           <Description key={index}>{desc}</Description> 
                        ))
                    }
                    </DescContainer>
                    </ContentContainer>
                ))
            }
        </>
    )
}

const Header = styled.h2`
font-family: 'Alata', sans-serif;
padding:1rem;
display:flex;
justify-content:center;
`

const ContentContainer= styled.div`
padding: 1rem;

`
const Title =styled.h4`
display:inline-block;
width: 60%;
font-family: 'Alata', sans-serif;//head3
padding: 15px 10px 2px 2px;
`
const DateRange =styled.p`
display:inline-block;
font-family: 'Roboto', sans-serif;
text-align:right;
width:calc(100% - 60%);
color:#505050;
font-weight:bold;
font-size:14px;
padding: 15px 10px 2px 2px;
`
const SubTitle = styled.p`
font-family: 'Miriam Libre', sans-serif;//subtitle2
font-size:13px;
padding: 10px;
`
const DescContainer = styled.ul`
list-style-position: inside;
`

const Description = styled.li`
font-family: 'Alata', sans-serif;
// font-family: 'Alfa Slab One', cursive;
// font-family: 'Miriam Libre', sans-serif;
// font-family: 'Roboto', sans-serif;
font-size:14px;
color: #909090;
padding: 2px;
`
export default WorkExperienceSection
