const visibilityFilter = (state='all', action) => {
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return state = action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;