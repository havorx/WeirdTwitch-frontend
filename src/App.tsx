import './App.css';
import routes from './routes/routes';
import {useRoutes} from 'react-router';
import {UserContext, UserProvider} from './context/userContext';
import {useContext, useEffect} from 'react';

function App() {
    const [userContext, setUserContext] = useContext(UserContext)


    const content = useRoutes(routes);

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
