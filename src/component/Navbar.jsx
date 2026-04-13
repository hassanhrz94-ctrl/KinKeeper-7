import React from 'react';
import MyNavLink from './MyNavLink';
import navLogo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto'>
            <img src={navLogo} alt="" />
            <ul className='flex justify-between gap-2'>
                <li>
                    <MyNavLink to={"/"}>Home</MyNavLink>
                </li>
                <li>
                    <MyNavLink to={"/timeline"}>TimeLine</MyNavLink>
                </li>
                <li>
                    <MyNavLink to={"/stats"}>Stats</MyNavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;