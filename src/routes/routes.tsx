import { createBrowserRouter } from 'react-router-dom';

import { Home, Login, Customize } from '..';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: 'customize',
        element: (
            <ProtectedRoute>
                <Customize />
            </ProtectedRoute>
        ),
    },
    {
        path: '/login',
        element: <Login />,
    },
]);
