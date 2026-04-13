import React, { useContext, useState } from 'react';
import { FriendContext } from '../context/FriendProvider';
import CallImg from "../../assets/call.png";
import VideoImg from "../../assets/video.png";
import TextImg from "../../assets/text.png";


const TYPE_IMAGE = {
  call: CallImg,
  text: TextImg,
  video: VideoImg,
};

const TimelineCard = ({ item }) => (
  <div className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">

  
    <img src={TYPE_IMAGE[item.type]} alt={item.type} className="w-5 h-5" />

    <div className="flex-1">
      <p className="text-sm text-gray-900">
        <span className="font-semibold capitalize">{item.type}</span>{' '}
        <span className="text-gray-500">with</span>{' '}
        <span className="text-gray-700">{item.name}</span>
      </p>
      <p className="text-xs text-gray-400 mt-0.5">{item.next_due_date}</p>
    </div>

    <div className="w-4 h-0.5 bg-rose-400 flex-shrink-0" />
  </div>
);

// ─── Timeline ─────────────────────────────────────────────────────────────────
const TimeLine = () => {
  const { call, text, video } = useContext(FriendContext);
  const [filter, setFilter] = useState('all');

  const allItems = [
    ...call.map((c) => ({ ...c, type: 'call' })),
    ...text.map((t) => ({ ...t, type: 'text' })),
    ...video.map((v) => ({ ...v, type: 'video' })),
  ].sort((a, b) => new Date(b.next_due_date) - new Date(a.next_due_date));

  const filtered = filter === 'all' ? allItems : allItems.filter((i) => i.type === filter);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="px-6 pt-6 pb-2">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-56 px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          <option value="all">Filter timeline</option>
          <option value="call">Calls</option>
          <option value="text">Texts</option>
          <option value="video">Videos</option>
        </select>
      </div>

      <div className="divide-y divide-gray-100 mt-2">
        {filtered.length > 0 ? (
          filtered.map((item, i) => <TimelineCard key={item.id ?? i} item={item} />)
        ) : (
          <p className="px-6 py-10 text-center text-sm text-gray-400">No events found</p>
        )}
      </div>
    </div>
  );
};

export default TimeLine;