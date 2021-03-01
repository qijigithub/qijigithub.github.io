import React from 'react';
import styled from "styled-components";
// import { Container } from '@material-ui/core';
import { TextField,TextareaAutosize,Button } from '@material-ui/core';
// import {Button} from '../components/UI/button/Button';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaSkype} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

import {FaWhatsapp} from 'react-icons/fa';




export const ContactPage = () => {
    return (
        // <Container maxWidth='sm'>
          <ContainerBody >
            <ContactWrapper>
            <ContactH1>Contact Me</ContactH1>
            <Message>Any question or remarks? Just write me  a messages!</Message>
            <ContactContainer>
                <ContactInfo>
                <h4>Let's get in touch</h4>
                 <p>Fill up the form and then click send</p>
                <IconText>
                    <FaPhoneAlt className='fa'/>
                    <span>312-647-8213</span>
                </IconText>
                <IconText>
                    <FaEnvelope className='fa'/>
                    <span>qijilearn@gmail.com</span>
                </IconText>
                <IconText>
                    <FaSkype className='fa'/>
                    <span>qqqqqqqqjjjjjj</span>
                </IconText>
                {/* <p>Connect with me: </p> */}
                <SocialMedia>
                    <IconCircle href='https://github.com/qijigithub'>
                            <FaGithubSquare/>
                        </IconCircle>
                        <IconCircle href='#'>
                            <FaWhatsapp/>
                        </IconCircle>
                        <IconCircle href='https://www.linkedin.com/in/ji-qi-profile/'>
                            <FaLinkedin/>
                        </IconCircle>
                </SocialMedia>
                </ContactInfo>
                <ContactForm action= "https://formspree.io/f/mdoprgjb" method="POST">
                <h4>Contact me</h4>
                <InputContainer>
                <TextField id="outlined-basic" label="Name" variant="outlined" name= "name" type="text"  fullWidth required/>
                </InputContainer>
                <InputContainer>
                <TextField id="outlined-basic" label="Email" name="_replyto" type="email" variant="outlined" fullWidth required/>
                </InputContainer>
                <InputContainer>
                <TextField id="outlined-basic" label="Phone" variant="outlined" fullWidth/>
                </InputContainer>
                <InputContainer > 
                <TextField id="outlined-basic" multiline rows={7} label="Message" name="message" variant="outlined" fullWidth/>
                </InputContainer>
                <InputContainer > 
                <Button variant="outlined" color="primary" type="submit" value="Send">Send</Button>   
                </InputContainer>
                </ContactForm>
            </ContactContainer>
            </ContactWrapper>
        </ContainerBody >
        // </Container>
    )
}

const SocialMedia = styled.div`
display:flex;
width: 40%;
// background:black;
justify-content:space-between;
`

const IconCircle = styled.a`
flex:0 1 40px;
justify-content:center;
align-items:center;
display:flex;
height:40px;
border-radius:50%;
transition:0.3s all ease-in-out;
&:hover{
    background:#e5e5e5;
}
`

const IconText = styled.div`
font-size:1.3rem;
display:flex;
// flex-direction:column;
justify-content:flex-start;
flex:0 1 20%
align-items:center;
margin-bottom:2rem;
// color: grey;

.fa{
    margin-right:2rem;
    flex:0 1 20px;
    font-size:2rem;

}
span{
    font-size:1.2rem;
    font-weight:300;
    font-family: 'Roboto', sans-serif;
}
`



const InputContainer = styled.div`
position: relative;
margin:1rem;
`

const ContactForm = styled.form`
background:white;
position:relative;
padding: 2.3rem 2.2rem;
z-index:1;
overflow:hidden;
h4{
    font-family: 'Roboto', sans-serif;
    font-size:2rem;
    font-weight:500;
    padding: 1rem;
    margin-bottom:2rem;
    color:grey;
}

`

const ContactInfo = styled.div`
flex:0 1 45%;
padding: 40px;
color:white;
display: flex;
flex-direction: column;
// width:100%;
h4{
    font-family: 'Roboto', sans-serif;
    font-size:2rem;
    font-weight:500;
    padding: 1rem;
    margin-bottom:2rem;
}
p{
    font-weight:300;
    font-size:1.2rem;
    margin-bottom:2rem;
    font-family: 'Roboto', sans-serif;
}

`

const ContactContainer =styled.div`
display: flex;
background: grey;
width:100%;
border-radius:10px;
box-shadow:0 0 20px 1px rgba(0,0,0,0.1);
z-index: 2;
overflow:hidden;
display: grid;
grid-template-columns: repeat(2, 1fr);
@media screen and (max-width:760px){
    grid-template-columns:1fr;
}
`
const Message =styled.p`
    color:black;
    text-align:center;
    margin-bottom:2rem;
    font-family: 'Alfa Slab One', cursive;
    font-size:1.5rem;
`;

const ContactH1 = styled.h1`
font-family: 'Alfa Slab One', cursive;
text-align: center;
color: grey;
margin-bottom:2rem;

`;

const ContactWrapper = styled.div`
padding: 2rem;
justify-content:center;
align-items:center;
margin-top:60px;
min-height : 100vh;
`

const ContainerBody = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
background: #f5f5f5;
align-items:center;
`
