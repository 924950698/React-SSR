const defaultState = {
    login: true,
}

export default (state = defaultState, action) => {
    console.log(state, action, '--action--')
    switch(action.type) {
        default:
            return state;
    }
}