import React, { useContext } from 'react';
import { FriendContext } from '../context/FriendProvider';
import CallCard from './CallCard';

const TextCard = () => {
    const{text}=useContext(FriendContext)
    return (
        <div>
            <CallCard/>
        </div>
    );
};

export default TextCard;