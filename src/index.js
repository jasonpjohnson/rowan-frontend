import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import OurWork from './pages/OurWork';
import Reviews from './pages/Reviews';
import Connect from './pages/Connect';
import Careers from './pages/Careers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'what-we-do',
        element: <WhatWeDo />,
      },
      {
        path: 'our-work',
        element: <OurWork />,
      },
      {
        path: 'reviews',
        element: <Reviews />,
      },
      {
        path: 'connect',
        element: <Connect />,
      },
      {
        path: 'careers',
        element: <Careers />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
