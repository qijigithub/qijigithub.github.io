import Navbar from '../navigation/navbar/Navbar';
import {GlobalStyle} from '../../GlobalStyle';
import { IntroSection} from '../home/IntroSection.js';
import AboutSection from '../home/AboutSection';
import ProjectSection from '../home/ProjectSection';
import { MenuData,buttonLinkData } from '../data/MenuData';
import { SliderData } from '../data/SliderData';
import { ProjectsCataData } from '../data/ProjectsCataData';
import Dropdown from '../UI/dropdown/Dropdown';
import React,{useState} from 'react';
import {AboutContainer} from '../home/AboutContainer'
import styled from 'styled-components';
import { Link ,Route,Switch} from 'react-router-dom';
import { ResumePage } from '../../containers/ResumePage';
import { HomePage } from '../../containers/HomePage';
import {ProjectsPage} from '../../containers/ProjectsPage';
import {AboutPage} from '../../containers/AboutPage';
import NavbarSet from '../navigation/navbar-set/NavbarSet';


export const Layout = () => {
    
    return(
            <>
                {/* 
                <IntroSection slides= {SliderData}/>
                <AboutSection {...AboutData}/>
                <ProjectSection projects = {ProjectsCataData}/> */}
                {/* </InvisibleContainer> */}
                <NavbarSet/>
                <Switch>
                 <Route path= {buttonLinkData .Resume} component ={ResumePage}/>
                 <Route path= {buttonLinkData.Projects}  component ={ProjectsPage}/>
                 <Route path= {buttonLinkData.Homes} component ={HomePage}/>
                 <Route path= {buttonLinkData.About} component ={AboutPage}/>
                 <Route path= "/" exact component ={HomePage}/>
                </Switch>
                
            </>
            
    )
}

const InvisibleContainer = styled.div`
@media screen and (max-width:760px){
    display:none;
}
`