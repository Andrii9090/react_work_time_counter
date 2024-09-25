import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './components/layouts/MainLayout'
import { Worker } from './components/Worker'
import { Login } from './components/Login'
import { AuthMiddleware } from './components/AuthMiddleware'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                index: true,
                element: <AuthMiddleware children={<Worker />} />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
])
