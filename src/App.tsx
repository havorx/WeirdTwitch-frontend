import './App.css';
import routes from './routes/routes';
import {useRoutes} from 'react-router';
import {UserProvider} from './context/userContext';
import {useState} from 'react';

function App() {
    const [value, setValue] = useState(null);
    const content = useRoutes(routes);

    return (
        <UserProvider value={{value, setValue}}>
            <div className="App ">
                {content}
            </div>
        </UserProvider>
    );
}

export default App;
