const initialState = {
    items: []
}

export default function (state = initialState, actions){
    switch(actions.type) {
        case 'UPDATE_CART':
            return {
                ...state,
                items: actions.items
            }

        case 'PURGE_CART':
            return {
                ...state,
                items: []
            }

        default:
            return {
                ...state
            }
    }
}
