export const updateWallet = (items) => {
    return {
        type: 'UPDATE_WALLET',
        items
    };
};

// TODO add action to change the balance after complete the payment cart action
