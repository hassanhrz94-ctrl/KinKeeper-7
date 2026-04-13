import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FriendContext } from '../context/FriendProvider';

const FriendDetails = () => {
    const { id } = useParams();
    const friends = useLoaderData();

    const expectedFriend = friends.find((friend) => friend.id === parseInt(id));

    const{handleCall,handleText,handleVideo}=useContext(FriendContext)
    console.log(handleCall,handleText,handleVideo)

    if (!expectedFriend) return <div>Friend not found</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-2xl mx-auto space-y-4">
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <div className="flex gap-5 flex-wrap">
                        <div className="flex flex-col items-center min-w-[110px]">
                            <img
                                src={expectedFriend.picture}
                                alt="avatar"
                                className="w-18 h-18 rounded-full object-cover w-[72px] h-[72px]"
                            />
                            <p className="text-[15px] font-semibold text-gray-900 mt-2">
                                {expectedFriend.name}
                            </p>
                            <div className="flex gap-1.5 mt-1.5 flex-wrap justify-center">
                                <span className="bg-red-100 text-red-700 text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                                    {expectedFriend.status}
                                </span>
                                <span className="bg-green-100 text-green-700 text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                                    {expectedFriend.tags}
                                </span>
                            </div>
                            <p className="text-[12px] text-gray-500 mt-2 italic text-center">
                                "{expectedFriend.bio}"
                            </p>
                            <p className="text-[11px] text-gray-400 mt-1">
                                Preferred: {expectedFriend.email}
                            </p>
                        </div>
                        <div className="flex-1 min-w-[220px]">
                            <div className="flex border border-gray-200 rounded-xl overflow-hidden mb-4">
                               
                                <div className="flex-1 text-center p-3">
                                    <p className="text-[22px] font-semibold text-gray-900">
                                        {expectedFriend.days_since_contact}
                                    </p>
                                    <p className="text-[12px] text-gray-500">Days Since Contact</p>
                                </div>
                                <div className="w-px bg-gray-200" />
                                <div className="flex-1 text-center p-3">
                                    <p className="text-[22px] font-semibold text-gray-900">
                                        {expectedFriend.goal}
                                    </p>
                                    <p className="text-[12px] text-gray-500">Goal (Days)</p>
                                </div>
                                <div className="w-px bg-gray-200" />
                                <div className="flex-1 text-center p-3">
                                    <p className="text-[14px] font-semibold text-gray-900">
                                        {expectedFriend.next_due_date}
                                    </p>
                                    <p className="text-[12px] text-gray-500">Next Due</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-1">
                                <button  className="flex items-center gap-2 px-3 py-2 rounded-lg text-[14px] text-gray-700 hover:bg-gray-50 w-full text-left">
                                    {/* Clock icon */}
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                                    </svg>
                                    Snooze 2 Weeks
                                </button>
                                <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-[14px] text-gray-700 hover:bg-gray-50 w-full text-left">
                                    {/* Archive icon */}
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>
                                    </svg>
                                    Archive
                                </button>
                                <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-[14px] text-red-600 hover:bg-gray-50 w-full text-left">
                                    {/* Trash icon */}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ───── CARD 2: Relationship Goal ───── */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-[14px] font-semibold text-gray-900">Relationship Goal</p>
                        <button className="bg-teal-600 text-white text-[13px] px-4 py-1.5 rounded-lg font-medium hover:bg-teal-700">
                            Edit
                        </button>
                    </div>
                    {/* expectedFriend.goalDays — used again here */}
                    <p className="text-[14px] text-gray-500">
                        Connect every <span className="text-gray-900 font-medium">{expectedFriend.goal} days</span>
                    </p>
                </div>

                {/* ───── CARD 3: Quick Check-In (3 buttons) ───── */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <p className="text-[14px] font-semibold text-gray-900 mb-3">Quick Check-In</p>
                    <div className="flex gap-3">
                        {/* Call Button */}
                        <button onClick={()=>handleCall(expectedFriend)} className="flex-1 flex flex-col items-center gap-1.5 py-4 rounded-xl border border-gray-200 text-[13px] text-gray-700 hover:bg-gray-50">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                            </svg>
                            Call
                        </button>
                        {/* Text Button */}
                        <button onClick={()=>handleText(expectedFriend)} className="flex-1 flex flex-col items-center gap-1.5 py-4 rounded-xl border border-gray-200 text-[13px] text-gray-700 hover:bg-gray-50">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            Text
                        </button>
                        {/* Video Button */}
                        <button  onClick={()=>handleVideo(expectedFriend)} className="flex-1 flex flex-col items-center gap-1.5 py-4 rounded-xl border border-gray-200 text-[13px] text-gray-700 hover:bg-gray-50">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                                <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                            </svg>
                            Video
                        </button>
                    </div>
                </div>

             

            </div>
        </div>
    );
};

export default FriendDetails;