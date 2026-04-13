import React, { createContext, useState } from 'react';
export const FriendContext =createContext();

const FriendProvider = ({children}) => {
    const[call,setCall]=useState([]);

const handleCall =(currentConversation)=>{
console.log(call,currentConversation);
const ifExistCall =call.find((friend)=>friend.id === currentConversation.id)
if(ifExistCall){
    alert('yo yo')
}
else{
    setCall([...call,currentConversation])
    alert("nono")
}
}


    const data ={
call,setCall,handleCall
    }
    return <FriendContext.Provider value={data}> {children} </FriendContext.Provider>
};

export default FriendProvider;