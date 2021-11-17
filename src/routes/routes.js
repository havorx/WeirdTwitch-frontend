import { Navigate } from 'react-router-dom';
import UserLayout from '../components/Layouts/UserLayout';
import Homepage from '../pages/Homepage/Homepage';
import Browse from '../pages/Browse/Browse';
import Category from '../pages/Category/Category';
const routes = [
    {
        path: '/',
        element: < UserLayout />,
        children: [
            { path: '/', element: <Homepage /> },
            { path: '/browse', element: <Browse /> },
            { path: '/category/:categoryID', element: <Category /> },
            // { path: '/404', element: <NotFound /> },
            // { path: '*', elemet: <Navigate to="/404" /> }
        ]
    },
    // {
    //     path: '/admin',
    //       element: < AdminLayout/>,
    //       children: [
    //         { path: 'login', element: <Login /> },
    //         { path: 'register', element: <Register /> },
    //       ]
    // }
];

export default routes;