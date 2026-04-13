import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './layout/RootLayout.jsx';
import Homepage from './home/Homepage.jsx';
import TimeLine from './timeline/TimeLine.jsx';
import Stats from './stats/Stats.jsx';

const router = createBrowserRouter([
  { path: "/", 
    Component:RootLayout,
    children :[
      {
        index: true, Component :Homepage
      },
      {
        path: "/timeline",
        Component : TimeLine,
      },
      {
        path : "/stats",
        Component :Stats
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
