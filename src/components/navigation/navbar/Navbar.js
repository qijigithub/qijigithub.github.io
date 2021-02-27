import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link ,Route,Switch} from 'react-router-dom';
import { buttonLinkData, menuData } from '../../data/MenuData';
import { Button } from '../../UI/button/Button';
import  Bars from '../../../images/bars.svg';
import {FaBars} from 'react-icons/fa';
import ResumePage from '../../../containers/ResumePage';
import {Layout} from '../../layout/Layout';


const Navbar = ({toggleDropdown}) => {
    return ( <Nav>
        <Logo to = "/" > JI QI </Logo> 
        <MenuBars onClick = {toggleDropdown}/>
        <NavMenu> {
            menuData.map((item, index) => ( 
                <NavMenuLinks to = { item.link }
                key = { index } > { item.title } 
                </NavMenuLinks>
            ))
        } 
        </NavMenu> 
        <NavBtn >
        <Button to = {buttonLinkData.Contact} primary = 'true'> Contact Me </Button> 
        </NavBtn> { /* <h1>Navbar</h1> */ } 
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav `
height:60px;
display:flex;
justify-content:space-between;
padding: 0rem 2rem;
z-index:100;
position:fixed;
width:100%;
background:#fff;
`
const NavLink = css `
color: grey;
display:flex;
align-items: center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;
`
const Logo = styled(Link)
`
${NavLink}
font-style:italic;
`
const MenuBars = styled(FaBars)`
display:none;
@media screen and (max-width:760px){
    display:block;
    background-size:contain;
    color:grey;
    height:25px;
    width:25px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-50%,55%);
}
`

// const MenuBars = styled.i`
// display:none;
// @media screen and (max-width:760px){
//     display:block;
//     background-image: url(${Bars});
//     background-size:contain;
//     height:40px;
//     width:40px;
// }
// `
const NavMenu = styled.div `
display:flex;
align-items:center;
margin-right :-48px;

@media screen and (max-width:760px){
    display: none;
}
`
const NavMenuLinks = styled(Link)
`
${NavLink}
`

const NavBtn = styled.div `
display:flex;
align-items:center;
margin-right:24px;

@media screen and (max-width:760px){
    display: none;
}
`