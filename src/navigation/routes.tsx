import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout';
import Home from './pages/home';
import Quiz from './pages/quiz';
import Loader from './pages/loader';
import Email from './pages/email';
import ThankYou from './pages/thank-you';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: 'quiz/:id',
        element: <Quiz />,
      },

      {
        path: 'loader',
        element: <Loader />,
      },

      {
        path: 'email',
        element: <Email />,
      },

      {
        path: 'thank-you',
        element: <ThankYou />,
      },
    ],
  },
]);
