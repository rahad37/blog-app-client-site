export const LoginStart = (userCredentials) => ({
    type: 'LOGIN_START'
})

export const LoginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
})

export const LogOut = () => ({
    type: "LOGOUT"
})


export const UpdateStart = (userCredentials) => ({
    type: 'UPDATE_START'
})

export const UpdateSuccess = (user) => ({
    type: 'UPDATE_SUCCESS',
    payload: user
})

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE"
})



// https://www.securityindustry.org/wp-content/uploads/sites/3/2018/05/noimage.png