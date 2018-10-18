export const updateObject = (oldObj, newObj) => Object.assign({}, oldObj, newObj);
export const updateItemInArray = (array, itemId, updateItemCallback) => {
    const updatedItems = array.map(item => {
        if (item.id !== itemId) {
            return item;
        }
        const updatedItem = updateItemCallback(item);
        return updatedItem;
    });

    return updatedItems;
}

export const createReducer = (initialState, handlers) => {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        }
        return state;
    }
}