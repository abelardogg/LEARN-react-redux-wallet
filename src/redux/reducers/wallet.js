const initialState = {
    items: [
        {name: 'werocoins', quantity: 50}
    ],
    balance: 500000
}

export default function (state = initialState, actions){
    switch(actions.type) {
        case 'UPDATE_WALLET':
            return {
                ...state,
                items: actions.items
            }
        default:
            return {
                ...state
            }
    }
}
