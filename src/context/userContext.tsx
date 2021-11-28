import {createContext, Dispatch, ReactChild, ReactFragment, ReactPortal, SetStateAction, useState} from 'react';

const token = localStorage.getItem('token');
const username = localStorage.getItem('username');
const role = localStorage.getItem('role');
type IUserState = {
    token?: any;
    username?: any;
    isAdmin?: any;
};

let initialState = {
    token: token,
    username: username,
    isAdmin: role === 'admin'
};



type ICurrentUserContext = [IUserState, Dispatch<SetStateAction<IUserState>>];

const UserContext = createContext<ICurrentUserContext>([{}, () => null]);


const UserProvider = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
    const [state, setState] = useState<IUserState>(initialState);

    return (
        <UserContext.Provider value={[state, setState]}>
            {props.children}
        </UserContext.Provider>
    );
};

export {UserContext, UserProvider};
