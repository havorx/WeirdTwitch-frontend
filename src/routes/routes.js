import { Navigate } from 'react-router-dom';
import UserLayout from '../components/Layouts/UserLayout';
import Homepage from '../pages/Homepage/Homepage';
import Browse from '../pages/Browse/Browse';
import Category from '../pages/Category/Category';
import NotFound from '../pages/404/NotFound';
import AdminLayout from '../components/Layouts/AdminLayout';
import CreateStream from '../pages/CreateStream/CreateStream';
import StreamRoom from '../pages/StreamRoom/StreamRoom';
import { useState } from 'react';

const routes = ({ isAdmin, isUser }) => {


    // const test = () => {
    //     if (isLoading) {
    //         return <Loading/>
    //     }
    //     if(isUser){
    //         return <CreateStream/>
    //     }else{
    //         return <Navigate to ="/"/>D
    //     }
    // }

    return [
        {
            path: '/',
            element: < UserLayout />,
            children: [
                { path: '/', element: <Homepage /> },
                { path: '/browse', element: <Browse /> },
                { path: '/category/:categoryID', element: <Category /> },
                {
                    path: '/stream/create', element: <div>
                        {isUser ? <CreateStream /> : <NotFound />}
                    </div>
                },
                { path: '/stream/room/:roomName', element: <StreamRoom /> },
                { path: '/404', element: <NotFound /> },
                { path: '*', element: <Navigate to="/404" /> }
            ]
        },
        {
            path: '/admin',
            element: isAdmin ? < AdminLayout /> : <Navigate to="/" />,
        }
    ];
}

export default routes;