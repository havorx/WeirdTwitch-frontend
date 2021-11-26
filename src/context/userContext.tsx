import React, {useState} from 'react';

type IUserState = {
    initialState?: object;
    token?: any
};

type ICurrentUserContext = [IUserState, React.Dispatch<React.SetStateAction<IUserState>>];

const UserContext = React.createContext<ICurrentUserContext>([{}, () => {
}]);


const UserProvider = (props: any) => {
    const [state, setState] = useState<IUserState>({initialState: {}});

    return (
        <UserContext.Provider value={[state, setState]}>
            {props.children}
        </UserContext.Provider>
    );
};

export {UserContext, UserProvider};
