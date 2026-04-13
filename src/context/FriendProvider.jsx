import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const FriendContext =createContext();

const FriendProvider = ({children}) => {
    const[call,setCall]=useState([]);
    const[text,setText]=useState([]);
    const[video,setVideo]=useState([]);

const handleCall =(currentConversation)=>{
console.log(call,currentConversation);
const ifExistCall =call.find((friend)=>friend.id === currentConversation.id)
if(ifExistCall){
    toast.error('already added')
}
else{
    setCall([...call,currentConversation])
    toast.success(`${currentConversation.name} is added to the timeline`)
}
}
const handleText =(currentConversation)=>{
console.log(call,currentConversation);
const ifExistText =text.find((friend)=>friend.id === currentConversation.id)
if(ifExistText){
    toast.error('already added')
}
else{
    setText([...text,currentConversation])
    toast.success(`${currentConversation.name} is added to the timeline`)
}
}
const handleVideo =(currentConversation)=>{
console.log(call,currentConversation);
const ifExistVideo =video.find((friend)=>friend.id === currentConversation.id)
if(ifExistVideo){
    toast.error('already added')
}
else{
    setVideo([...video,currentConversation])
    toast.success(`${currentConversation.name} is added to the timeline`)
}
}


    const data ={
call,setCall,handleCall,
text,setText,handleText,
video,setVideo,handleVideo
    }
    return <FriendContext.Provider value={data}> {children} </FriendContext.Provider>
};

export default FriendProvider;