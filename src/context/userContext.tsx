import {createContext, Dispatch, ReactChild, ReactFragment, ReactPortal, SetStateAction, useState} from 'react';

let initialState = {};
type IUserState = {
    token?: string;
    username?: string;
    isAdmin?: boolean;
};
type ICurrentUserContext = [IUserState, Dispatch<SetStateAction<IUserState>>];

const UserContext = createContext<ICurrentUserContext>([{}, () => null]);


const UserProvider = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
    const [state, setState] = useState(initialState);

    return (
        <UserContext.Provider value={[state, setState]}>
            {props.children}
        </UserContext.Provider>
    );
};

export {UserContext, UserProvider};
