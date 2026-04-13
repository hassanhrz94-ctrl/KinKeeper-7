import React from 'react';

const FriendCard = ({friend}) => {
    const statusStyle = {
  overdue: "bg-red-100 text-red-600",
  "almost due": "bg-yellow-100 text-yellow-600",
  "on-track": "bg-green-100 text-green-600",
};

const currentStatusStyle = statusStyle[friend.status] || "bg-gray-100 text-gray-500"

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
      
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
      />

    
      <h2 className="text-lg font-semibold text-gray-800">{friend.name}</h2>

      
      <p className="text-sm text-gray-400 mb-3">
        {friend.days_since_contact}d ago
      </p>

      
      <div className="flex justify-center gap-2 flex-wrap mb-3">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Status */}
 <span className={`text-xs px-3 py-1 rounded-full ${currentStatusStyle}`}>
  {friend.status}
</span>
    </div>
    );
};

export default FriendCard;