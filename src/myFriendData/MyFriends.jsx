import React from 'react';
import { useLoaderData } from 'react-router';
import FriendCard from './FriendCard';

const MyFriends = () => {
    const friends =useLoaderData()
    console.log(friends)
    return (
        <div className='grid grid-cols-1   md:grid-cols-3'>
            {
                friends.map((friend,ind)=><FriendCard friend={friend} key={ind}></FriendCard>)
            }
        </div>
    );
};

export default MyFriends;