export const updateCart = (items) => {
    return {
        type: 'UPDATE_CART',
        items
    };
};

export const purgeCart = () => {
    return {
        type: 'PURGE_CART'
    };
};
