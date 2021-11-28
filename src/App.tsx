import './App.css';
import routes from './routes/routes';
import { useRoutes } from 'react-router';
import { UserProvider } from './context/userContext';
import { useState, useEffect } from 'react';

function App() {
    const [value, setValue] = useState(false);


    const isAdmin = localStorage.getItem('token') ? true : false
    const isUser = localStorage.getItem('token') ? true : false

    
    const content = useRoutes(routes({ isAdmin: isAdmin, isUser: isUser }));
    return (
        <UserProvider value={{ value, setValue }}>
            <div className="App ">
                {content}
            </div>
        </UserProvider>
    );
}

export default App;
