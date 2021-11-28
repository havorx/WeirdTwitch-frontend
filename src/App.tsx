import './App.css';
import routes from './routes/routes';
import { useRoutes } from 'react-router';
import { UserContext, UserProvider } from './context/userContext';
import { useContext, useEffect, useState } from 'react';

function App() {
    const [, setUserContext] = useContext(UserContext)


    const isAdmin = false;
    const isUser = false;
    const content = useRoutes(routes({ isAdmin: isUser, isUser: isUser }));


    useEffect(() => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        const role = localStorage.getItem('role');
        if (token) {
            setUserContext((oldValues: any) => {
                return {
                    ...oldValues,
                    token: token,
                    username: username,
                    isAdmin: role === 'admin',
                };
            });
        }

    }, []);


    return (
        <UserProvider >
            <div className="App ">
                {content}
            </div>
        </UserProvider>
    );
}

export default App;
