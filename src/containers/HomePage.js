import React from 'react'
import {useState} from 'react';
import Navbar from '../components/navigation/navbar/Navbar';
import {GlobalStyle} from '../GlobalStyle';
import { IntroSection} from '../components/home/IntroSection.js';
import AboutSection from '../components//home/AboutSection';
import ProjectSection from '../components/home/ProjectSection';
import { AboutData } from '../components/data/AboutData';
import { SliderData } from '../components/data/SliderData';
import { ProjectsCataData } from '../components/data/ProjectsCataData';
import Dropdown from '../components/UI/dropdown/Dropdown';

export const HomePage = () => {
    // const [isOpen,setIsOpen]= useState(false);
    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen)
    // }
    return (
        <div>               
                <IntroSection slides= {SliderData}/>
                {/* <InvisibleContainer> */}
                {/* <AboutContainer/> */}
                <AboutSection {...AboutData}/>
                <ProjectSection projects = {ProjectsCataData}/>
                {/* </InvisibleContainer> */}
        </div>
    )
}


