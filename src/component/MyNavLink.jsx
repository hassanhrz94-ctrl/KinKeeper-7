import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children}) => {
    return (
        <div>
           <NavLink to={to} className={({isActive})=>`${isActive?"text-green-700 border-b-2":""}`}> {children}</NavLink>
        </div>
    );
};

export default MyNavLink;