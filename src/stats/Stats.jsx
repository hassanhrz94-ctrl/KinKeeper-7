import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { FriendContext } from '../context/FriendProvider';

const renderCustomLegend = (props) => {
  const { payload } = props;
  return (
    <div className="flex justify-center gap-6 mt-4">
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-xs text-gray-500">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const Stats = () => {
  const { call, text, video } = useContext(FriendContext);

  const data = [
    { name: 'call', value: call.length, fill: '#00884f' },
    { name: 'text', value: text.length, fill: '#00C495' },
    { name: 'video', value: video.length, fill: '#FFBB28' },
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-22 mt-6">

     
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 w-full">

        <h3 className="text-sm sm:text-base font-semibold text-gray-600 mb-4">
          By Interaction Type
        </h3>

    
        <div className="w-full" style={{ height: 'clamp(220px, 40vw, 380px)' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                cornerRadius={8}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '13px',
                }}
              />
              <Legend content={renderCustomLegend} />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Stats;