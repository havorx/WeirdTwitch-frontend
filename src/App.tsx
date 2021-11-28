import './App.css';
import routes from './routes/routes';
import { useRoutes } from 'react-router';
import { UserProvider } from './context/userContext';
import { useEffect} from 'react';

function App() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const isUser = !!token;
    const isAdmin = role === 'admin';
    console.log(token);

    const content = useRoutes(routes({ isAdmin: isAdmin, isUser: isUser }));

    return (
        <UserProvider >
            <div className="App ">
                {content}
            </div>
        </UserProvider>
    );
}

export default App;
