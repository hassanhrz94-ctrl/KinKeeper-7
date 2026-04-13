import React, { useContext } from 'react';
import { FriendContext } from '../context/FriendProvider';

const CallCard = () => {
    const{call}=useContext(FriendContext)
    return (
        <div>
            {
                call.map((friend)=>{
                    return <div>
                        {friend.name} 
                    </div>
                })
            }
        </div>
    );
};

export default CallCard;