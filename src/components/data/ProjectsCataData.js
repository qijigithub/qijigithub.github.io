import reactIcon from '../../images/reactIcon.svg';
import flutterIcon from '../../images/flutterIcon.svg';
import dataIcon from '../../images/dataIcon.svg';
import {buttonLinkData} from './MenuData';

export const ProjectsCataData = [
    {
        Icon:dataIcon,
        path: buttonLinkData.Projects,
        projectCatagory:'Data Science',
        projectDetail:'Folder contains machine learning, big data mining, and Artifitial Intelligence project',

    },
    {
        Icon:reactIcon,
        path: buttonLinkData.Projects,
        projectCatagory:'React Development',
        projectDetail:'Folder contains projects developed by ReactJs, which is an web development framework in NodeJs',

    },
    {
        Icon:flutterIcon,
        path: buttonLinkData.Projects,
        projectCatagory:'Mobile Development',
        projectDetail:'Folder contains projects developed by flutter, which is an cross platform development tools.',
    }
]