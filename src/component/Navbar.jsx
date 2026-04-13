import React from 'react';
import MyNavLink from './MyNavLink';
import navLogo from "../../assets/logo.png"
import { FaHome } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto'>
            <img src={navLogo} alt="" />
            <ul className='flex justify-between gap-2'>
                <li>
                    <MyNavLink to={"/"} >  <span className="flex items-center gap-2">
    <FaHome /> Home
  </span></MyNavLink>
                </li>
                <li>
                    <MyNavLink to={"/timeline"}><span className="flex items-center gap-2"><IoTimer />TimeLine</span></MyNavLink>
                </li>
                <li>
                    <MyNavLink to={"/stats"}>
            <span className="flex items-center gap-2"><ImStatsDots />Stats</span></MyNavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;