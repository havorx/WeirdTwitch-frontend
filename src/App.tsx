import './App.css';
import routes from './routes/routes';
import { useRoutes } from 'react-router';
import { UserContext, UserProvider } from './context/userContext';
import { useContext, useEffect, useState } from 'react';

function App() {
    const [userContext, setUserContext] = useContext(UserContext)


    const isAdmin = false;
    const isUser = false;
    const content = useRoutes(routes({ isAdmin: isUser, isUser: isUser }));


    useEffect(() => {

        console.log(userContext);
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
