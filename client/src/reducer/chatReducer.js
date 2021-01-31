const chatReducer = (state, action) => {
    let draftState = [...state];

    switch(action.type) {
        case 'CHAT':
            draftState = [...draftState, action.payload];
            return draftState;
        case 'RESET_CHAT':
            draftState = action.payload;
            return draftState;
        default:
            return state;
    }
}

export default chatReducer;