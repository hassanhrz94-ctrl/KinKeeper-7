import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    const{id}=useParams()
       const friends =useLoaderData()
    console.log(id)

    const expectedFriend =friends.find((friend)=>friend.id === parseInt(id))
    console.log(expectedFriend)
    return (
        <div>
            {
                expectedFriend.name
            }
        </div>
    );
};

export default FriendDetails;