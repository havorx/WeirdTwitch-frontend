import {createContext, Dispatch, ReactChild, ReactFragment, ReactPortal, SetStateAction, useState} from 'react';

const token = localStorage.getItem('token');
const username = localStorage.getItem('username');
const role = localStorage.getItem('role');
const credits = localStorage.getItem('credits');
type IUserState = {
    token?: any;
    username?: any;
    isAdmin?: any;
    credits?: any;
};

let initialState = {
    token: token,
    username: username,
    isAdmin: role === 'admin',
    credits: credits
};



type ICurrentUserContext = [IUserState, Dispatch<SetStateAction<IUserState>>];

const UserContext = createContext<ICurrentUserContext>([{}, () => null]);


const UserProvider = (props: any) => {
    const [state, setState] = useState<IUserState>(initialState);

    return (
        <UserContext.Provider value={[state, setState]}>
            {props.children}
        </UserContext.Provider>
    );
};

export {UserContext, UserProvider};
