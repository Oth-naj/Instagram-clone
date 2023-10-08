import React from 'react'
import "../styling/Nav.css"
import Logo from '../images/download.png'
import Profile from '../images/download.jpeg'
import { HiHome } from "react-icons/hi"
import { BsSend } from "react-icons/bs"
import { CiSquarePlus } from "react-icons/ci"
import { AiOutlineCompass } from "react-icons/ai"
import { CiSearch } from "react-icons/ci"


export default function Navigation() {
    return (
    <>

        <nav className="navbar bg-body-tertiary fixed-top ">
            <div className="container justify-content-between">
                <a className="navbar-brand"><img src={Logo} alt="" /></a>
                <form className="form d-flex" role="search">
                    <input className="form-control me-2" type="search" aria-label="Search"/>
                    <i className='search_icon'> <CiSearch/> </i>
                    
                </form>
                <div className="icons align-items-center">
                <i className='home_icon'><HiHome/></i>
                <i className='send_icon'><BsSend/></i>
                <i className='plus_icon'><CiSquarePlus/></i>
                <i className='compas_icon'><AiOutlineCompass/></i>
                <img className='profile rounded-circle' src={Profile} alt="" />
                </div>
            </div>
        </nav>

    </>
    )
}
