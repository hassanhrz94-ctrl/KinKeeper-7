import React, { useContext } from 'react';
import { FriendContext } from '../context/FriendProvider';

const TimeLine = () => {
    const{call}=useContext(FriendContext)
    return (
        <div>
           {
            call.length
           }
           {call.name}
        </div>
    );
};

export default TimeLine;