import reactIcon from '../../images/reactIcon.svg';
import flutterIcon from '../../images/flutterIcon.svg';
import dataIcon from '../../images/dataIcon.svg';
import {buttonLinkData} from './MenuData';
import {ReactDevelopmentData} from './project/ReactDevelopmentData';
import {DataScienceData} from './project/DataScienceData';
import {MobileDevelopmentData} from './project/MobileDevelopmentData';

export const ProjectsCataData = [
    {
        Icon:dataIcon,
        path: buttonLinkData.Projects,
        projectCatagory:'Data Science',
        projectDetail:'Folder contains machine learning, big data mining, and Artifitial Intelligence project',
        projects:DataScienceData, 
        link:'/projects',
        openIdx:0,
    },
    {
        Icon:reactIcon,
        path: buttonLinkData.Projects,
        projectCatagory:'React Development',
        projectDetail:'Folder contains projects developed by ReactJs, which is an web development framework in NodeJs',
        projects:ReactDevelopmentData, 
        link:'/projects',
        openIdx:1,
    },
    {
        Icon:flutterIcon,
        path: buttonLinkData.Projects,
        projectCatagory:'Mobile Development',
        projectDetail:'Folder contains projects developed by flutter, which is an cross platform development tools.',
        projects:MobileDevelopmentData, 
        link:'/projects',
        openIdx:2,
    }
]