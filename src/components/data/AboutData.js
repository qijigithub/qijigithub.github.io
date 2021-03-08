import  profileImg from '../../images/profileImg.jpg';
import birthIcon from '../../images/birthIcon.svg';
import threedotIcon from '../../images/threedotIcon.svg';
import collegeIcon from '../../images/collegeIcon.svg';
import masterIcon from '../../images/masterIcon.svg';
import companyIcon from '../../images/companyIcon.svg';
import { Timer10 } from '@material-ui/icons';

export const AboutData = {
    title: 'About me',
    profileImg: profileImg,
    alt: 'profile',
    heading:'About Me',
    paragraph1:'Hi, I\'m Ji. I am a Development Anaylst, focusing on ReactJS and flutter development. I also interested in Data Science. I graduated from DePaul university with a master degree, majoring in computer science. During my study, I am focus on gaining hands - on experience in the area of data science, machine learning algorithm study.',
    paragraph2: 'I am a Development Anaylst and Data Scientist.',
    //  If you have project or if you want\
    //  make a software for your business contact me. I make as soon as possible.',
    buttonLabel:'View Resume',
    reverse:false,
    delay:100,
    timeline: [
        {
            id:'time5',
            title: 'Work',
            description: 'I worked in Nimbl WorldWide Inc. from 2019 to now. I\'ve been work as a Development Anylst for 2 years. ',
            dotColor:'primary',  //'grey'| 'inherit'| 'primary'| 'secondary'
            icon:companyIcon,      
        },
        {
            id:'time4',
            title: 'Master',
            description: '2018, I graduated from DePaul University with a master degree, majoring in computer science.',
            dotColor:'inhert',  //'grey'| 'inherit'| 'primary'| 'secondary'
            icon:masterIcon,      
        },
        {
            id:'time3',
            title: 'College',
            description: 'From 2010 - 2014, I studied at ZheJiang University of Finance & Economics. I was pursuing double major. I got bachelor of science, major in information and computing science and bachelor of economics, major in finance.',
            dotColor:'primary',  //'grey'| 'inherit'| 'primary'| 'secondary'
            icon:collegeIcon,      
        },
        {
            id:'time2',
            title: 'Age before 18',
            description: 'Like a normal child, go to primary school, middle school and high school',
            dotColor:'grey',  //'grey'| 'inherit'| 'primary'| 'secondary'
            icon:threedotIcon,      
        },
        {
            id:'time1',
            title: 'Born',
            description: 'In 1992, I was born in Beijing, China',
            dotColor:'secondary',  //'grey'| 'inherit'| 'primary'| 'secondary'
            icon:birthIcon,      
        }
    ]
}