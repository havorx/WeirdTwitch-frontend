import './App.css';
import routes from './routes/routes';
import {useRoutes} from 'react-router';
import {UserProvider} from './context/userContext';

function App() {
    const content = useRoutes(routes);

    return (
        <UserProvider>
            <div className="App ">
                {content}
            </div>
        </UserProvider>
    );
}

export default App;
