import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';
// import Link from '../components/link';
import {NavLink} from 'react-router-dom'
import React from 'react';

// const mapStateToPorps = (state, ownProps) => {
//     return {
//         active: ownProps.filter === state.visibilityFilter
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onClick: () => {
//             dispatch(setVisibilityFilter(ownProps.filter))
//         }
//     }
// }

// const FilterLink = connect(
//     mapStateToPorps,
//     mapDispatchToProps
// )(Link);

const FilterLink = ({filter, children}) => {
    return (
    <NavLink exact to={filter==='all'?'/':`/${filter}`} activeStyle={{
        textDecoration: 'none',
        color: 'black'
    }}>
        {children}
    </NavLink>
)}

export default FilterLink;