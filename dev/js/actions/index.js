export const selectUser = (user) => {
    console.log("user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
