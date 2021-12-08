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
        myAxios.post('/auth/refreshToken', {}).then(async (response: any) => {
            if (response) {
                if (response.statusText === 'OK') {
                    const data = await response.data;
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('username', data.username);
                    localStorage.setItem('role', data.role);

                    setUserContext(oldValues => {
                        return {
                            ...oldValues,
                            token: data.token,
                            username: data.username,
                            isAdmin: data.role === 'admin',
                        };
                    });
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
