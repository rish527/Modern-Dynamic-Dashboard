import React from "react";
import './navbar.css';
import "../index.css"

import logo from '../assets/logo.jpg';

import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

export default function Navbar({name}){
    return(
        <div className="navbar">
            <div className="nav-left">
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="text">
                    <h1>Welcome, {name}</h1>
                    <p>Your personal dashboard overview</p>
                </div>
            </div>
            <div className="nav-right">
                <div className="search">
                    {/* <SearchIcon /> */}
                    {/* <span className="material-symbols-outlined">search</span> */}
                    <CiSearch size={23}/>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="user-icon rounded-full p-2 bg-white">
                    {/* <AccountCircleIcon /> */}
                    {/* <span class="material-symbols-outlined">account_circle</span> */}
                    <FaRegUser size={25} />
                </div>
            </div>
        </div>
    );
}