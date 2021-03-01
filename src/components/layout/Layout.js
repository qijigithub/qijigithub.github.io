import { buttonLinkData } from '../data/MenuData';
import React from 'react';
import styled from 'styled-components';
import { Route,Switch} from 'react-router-dom';
import { ResumePage } from '../../containers/ResumePage';
import { HomePage } from '../../containers/HomePage';
import {ProjectsPage} from '../../containers/ProjectsPage';
import {AboutPage} from '../../containers/AboutPage';
import {ContactPage} from '../../containers/ContactPage';
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
                 <Route path= {buttonLinkData.Home} component ={HomePage}/>
                 <Route path= {buttonLinkData.About} component ={AboutPage}/>
                 <Route path= {buttonLinkData.Contact} component ={ContactPage}/>
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