import React, {useState} from 'react';


let initialState = {};

const UserContext = React.createContext([{}, () => {
}]);


const UserProvider = (props) => {
    const [state, setState] = useState(initialState);

    return (
        <UserContext.Provider value={[state, setState]}>
            {props.children}
        </UserContext.Provider>
    );
};

export {UserContext, UserProvider};
