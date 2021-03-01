import React from 'react'
import { IntroSection} from '../components/home/IntroSection.js';
import AboutSection from '../components//home/AboutSection';
import ProjectSection from '../components/home/ProjectSection';
import { AboutData } from '../components/data/AboutData';
import { SliderData } from '../components/data/SliderData';
import { ProjectsCataData } from '../components/data/ProjectsCataData';

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


