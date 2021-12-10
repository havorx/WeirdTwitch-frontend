import './App.css';
import routes from './routes/routes';
import {useRoutes} from 'react-router';
import {UserContext, UserProvider} from './context/userContext';
import {useContext, useEffect} from 'react';
import {myAxios} from './utils/AxiosSetup';

function App() {
    const [, setUserContext] = useContext(UserContext);
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const isUser = !!token;
    const isAdmin = role === 'admin';
    console.log(token);

    const content = useRoutes(routes({isAdmin: isAdmin, isUser: isUser}));

    function verifyUser() {
        const refreshToken = localStorage.getItem('refreshToken');
        myAxios.post('/auth/refreshToken', {refreshToken}).then(async (response: any) => {
            if (response) {
                if (response.statusText === 'OK') {
                    const data = await response.data;
                    localStorage.setItem('refreshToken', data.refreshToken);
                }
            }
        });
    }

    useEffect(() => {
        verifyUser();
    }, []);

    return (
        <UserProvider>
            <div className="App ">
                {content}
            </div>
        </UserProvider>
    );
}

export default App;
