export const selectUser = (user) => {
    console.log("user: ", user.first);
    return {
        type: 'USER/USER_SELECTED',
        payload: user
    }
};
export const addUser = (user) => {
    console.log("user: ", user.first);
    return {
        type: 'USER/ADD_USER',
        payload: user
    }
};
