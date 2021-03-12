import React from 'react'
import styled from 'styled-components';
import {HiOutlineExternalLink} from 'react-icons/hi';
import {FaGithubSquare} from 'react-icons/fa';
import Chip from '@material-ui/core/Chip';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';



const MCard = (props) => {
    const {project} = props;
    return (
   <ProjectWrapper >
       <ProjectScreen>
       <img src= {project.screenImg} alt={"projectimg"}/>
           </ProjectScreen>
       <ProjectDescription>
        <TitleBar>{project.title}
        <Box component="fieldset"  borderColor="transparent">
         <Rating name="read-only" value={project.level} readOnly size="small" />
      </Box>
        </TitleBar>
        <p>
            Keywords : 
        {
            project.keywords.map((keyword,idx)=>(
                <Chip  key={idx} style={{margin: '2px'}} label={keyword}/>
            ))
        }
          </p>
          <p>
        </p>
       <p>{project.description}</p>
       <SocialMedia>
       {/* <Button to= {project.explainationLink} primary ='true'>{'Learn more'}</Button> */}
                    <IconCircle href={project.githubLink} className='faC'>
                            <FaGithubSquare/>
                        </IconCircle>
                        <IconCircle href={project.projectLink} className='faC'>
                            <HiOutlineExternalLink/>
                        </IconCircle>
                        {/* <IconCircle to={"/story"} className='faC'>
                            <FaLinkedin/>
                        </IconCircle> */}
                </SocialMedia>
       </ProjectDescription>
   </ProjectWrapper>
    )
}

// const ProjectHeader = styled.h4`
// // font-family: 'Alata', sans-serif;
// // font-family: 'Alfa Slab One', cursive;
// font-family: 'Miriam Libre', sans-serif;
// // font-family: 'Roboto', sans-serif;
// display: inline-block;
// padding:1rem;
// `


const IconCircle = styled.a`
flex:0 1 40px;
justify-content:center;
align-items:center;
display:flex;
height:40px;
border-radius:50%;
color: black;
text-decoration: none;
transition:0.3s all ease-in-out;
&:hover{
    background:#e5e5e5;
    text-decoration: none;
}
&:visited { text-decoration: none; }
&:active {
    color: green;
    text-decoration: none;
}
`

const SocialMedia = styled.div`
display:flex;
width: 30%;
// background:black;
justify-content:space-between;
float:right;
`

const ProjectScreen = styled.div`
flex:0 1 50%;
// padding: 40px;
color:white;
display: flex;
flex-direction: column;
// min-width:400px;
background: grey;
// width:100%;
h4{
    font-size:2rem;
    font-weight:500;
    padding: 1rem;
    // margin-bottom:2rem;
}
p{
    font-weight:300;
    font-size:1.2rem;
    // margin-bottom:2rem;
    font-family: 'Roboto', sans-serif;
}
img{
    width: 100%;
    height:100%;
    object-fit: cover;
}
`

const TitleBar = styled.div`
font-family: 'Alata', sans-serif;
font-size:2rem;
font-weight:500;
padding: 0.5rem;
// margin-bottom:0.5rem;
// color:grey;
display:flex;
justify-content: space-between;
`

const ProjectDescription = styled.div`
background:white;
position:relative;
flex:0 1 50%;
padding: 1.3rem 1.2rem;
z-index:1;
overflow:hidden;
h4{
    font-family: 'Alata', sans-serif;
    font-size:2rem;
    font-weight:500;
    padding: 0.5rem;
    // margin-bottom:0.5rem;
    // color:grey;
}
p{
    // display:flex;
    font-weight:200;
    font-size:1.20em;
    padding: 0.5rem;
    // margin-bottom:0.5rem;
    font-family: 'Alata', sans-serif;
}
@media screen and (max-width:760px){
    padding: 0px;
    margin:0px;
    flex:0 1 100%
    p{
        font-weight:100;
        font-size:1.0em;
        padding: 0.5rem;
        padding: 0px;
        margin:0px;
    }

}
`


const ProjectWrapper  =styled.div`
display: flex;
border: 1px solid #BEBEBE;
margin-top:2rem;
margin-bottom:2rem;
width:100%;
border-radius:10px;
box-shadow:0 0 20px 1px rgba(0,0,0,0.1);
z-index: 2;
overflow:hidden;
display: grid;
grid-template-columns: repeat(2, 1fr);
@media screen and (max-width:1200px){
    // grid-template-columns:1fr;
}
@media screen and (max-width:760px){
    grid-template-columns:1fr;
}
`

export default MCard
