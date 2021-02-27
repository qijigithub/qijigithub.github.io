import React from 'react'
import styled from 'styled-components';
import {WorkExperienceData} from '../data/resume/WorkExperienceData';

const WorkExperienceSection = () => {
    return (
        <div>
            <Header>Work Experience</Header>
            {
                WorkExperienceData.map((workexp)=>(
                    <>
                    <p key={workexp.id}>{workexp.JobTitle}</p>
                    <p key={workexp.id}>{workexp.DateRange}</p>
                    </>
                ))
            }
        </div>
    )
}

const Header = styled.h2`
font-family: 'Alata', sans-serif;
padding:1rem;
display:flex;
justify-content:center;
`

export default WorkExperienceSection
