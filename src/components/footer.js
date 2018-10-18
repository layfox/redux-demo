import React from 'react';
import FilterLink from '../containers/filterLink'

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter="all">
            ALL
        </FilterLink>
        {', '}
        <FilterLink filter="active">
            ACTIVE
        </FilterLink>
        {', '}
        <FilterLink filter="completed">
            COMPLETED
        </FilterLink>
    </p>
);

export default Footer;