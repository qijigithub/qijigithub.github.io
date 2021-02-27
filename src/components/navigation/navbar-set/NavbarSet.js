import React,{useState} from 'react'
import Navbar from '../navbar/Navbar';
import Dropdown from '../../UI/dropdown/Dropdown';
import {GlobalStyle} from '../../../GlobalStyle';

const NavbarSet = () => {
    const [isOpen,setIsOpen]= useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
         <GlobalStyle/> 
        <Navbar toggleDropdown = {toggleDropdown}/>
        <Dropdown isOpen = {isOpen} toggleDropdown = {toggleDropdown}/> 
        </div>
    )
}

export default NavbarSet
