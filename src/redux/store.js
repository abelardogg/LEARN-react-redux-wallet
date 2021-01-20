import {combineReducers, createStore} from 'redux';
import cart from './reducers/cart';
import wallet from './reducers/wallet';

const initialState = {};
export const rootReducers = combineReducers({
    cart,
    wallet
});

export function configureStore(initialState = {}){
    const store = createStore(rootReducers, initialState);
    return store;
}

export const store = configureStore(initialState); 

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

//unsubscribe()
