import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { LoginPage } from './auth/pages/login/LoginPage';
import { RegisterPage } from './auth/pages/register/RegisterPage';
import HomeLayout from './home/layouts/HomeLayout';
import HomePage from './home/pages/HomePage';

const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'));


export const appRouter = createBrowserRouter([
    // Main routes
  {
    path: '/',
    element: <HomeLayout />,
    children: [
        {
            index: true,
            element: <HomePage />
        }
    ]
  },
    // Auth Routes
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);