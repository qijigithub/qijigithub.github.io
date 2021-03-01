import React from 'react';
import styled from 'styled-components';
import {EducationData} from '../data/resume/EducationData';

const EducationSection = () => {
    return (
        <div>
            <Header> Education </Header>
            {
                EducationData.map((eduexp)=>(
                    <ContentContainer key={eduexp.id}>
                    <Title >{`Institution: ${eduexp.Institution}`}</Title>
                    <GPA>{eduexp.GPA}</GPA>
                    <SubTitle>{`Degree : ${eduexp.Degree}`}</SubTitle>
                    <DateRange >{eduexp.Date}</DateRange>
                    <DescContainer>
                    {
                        eduexp.Descriptions.map((desc,index)=>(
                           <Description key={`edu${index}`}>{desc}</Description> 
                        ))
                    }
                    </DescContainer>
                    </ContentContainer>
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

const ContentContainer= styled.div`
padding: 1rem;

`
const Title =styled.h4`
display:inline-block;
width: 80%;
font-family: 'Alata', sans-serif;//head3
padding: 15px 10px 2px 2px;
`
const GPA= styled.p`
font-family: 'Roboto', sans-serif;
width:calc(100% - 80%);
display:inline-block;
text-align:right;
font-weight:bold;
font-size:14px;

`

const DateRange =styled.p`
display:inline-block;
font-family: 'Roboto', sans-serif;
font-style: oblique;
text-align:right;
width:calc(100% - 80%);
color:#505050;
font-size:14px;
padding: 15px 10px 2px 2px;
`
const SubTitle = styled.p`
font-family: 'Miriam Libre', sans-serif;//subtitle2
font-size:11px;
padding: 10px;
width: 80%;
display:inline-block;
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

export default EducationSection
