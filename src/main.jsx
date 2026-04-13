import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './layout/RootLayout.jsx';
import Homepage from './home/Homepage.jsx';
import TimeLine from './timeline/TimeLine.jsx';
import Stats from './stats/Stats.jsx';
import FriendDetails from './myFriendData/FriendDetails.jsx';
import FriendProvider from './context/FriendProvider.jsx';

const router = createBrowserRouter([
  { path: "/", 
    Component:RootLayout,
    children :[
      {
        index: true, 
        Component :Homepage,
        loader :()=> fetch("/friends.json")
      },
      {
        path: "/timeline",
        Component : TimeLine,
      },
      {
        path : "/stats",
        Component :Stats
      },
      {
        path:"/friendDetails/:id",
        Component:FriendDetails,
        loader:()=>fetch("/friends.json")
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>

      <RouterProvider router={router} />,
    </FriendProvider>
  </StrictMode>,
)
