"use client";

import Link from "next/link";
import Image from "next/image"
import Flawed from "../../../public/flawed.svg";
import React, { useState } from "react";
import NavItem from "./navitem";
import '../../../styles/globals.css';

const MENU_LIST = [
    { text: "Home", href: "/"},
    { text: "Shop", href: "/shop"},
    { text: "Lookbook", href: "/lookbook"},
    { text: "About", href: "/about"},
    { text: "Contact", href: "/contact"},
    
];

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);
    return (
        <header>
            <nav className={`nav`}>
                <Link href={"/"} legacyBehavior>
                    <a>
                        <Image priority src={Flawed} alt="FLAWED" className="flawed-logo"/>
                    </a>
                </Link>
                <div onClick={()=> setNavActive(!navActive)} className={`nav__menu-bar`}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx)=>(
                        <div onClick={()=>{
                            setActiveIdx(idx);
                            setNavActive(false);
                        }} 
                        key = {menu.text}>
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}
export default Navbar;