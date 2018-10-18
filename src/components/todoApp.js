import React from 'react';
import Footer from './footer';
import AddTodo from '../containers/addTodo';
import VisibleTodoList from '../containers/visibleTodoList';

const TodoApp = ({match}) => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList  filter={match.params.filter || 'all'} />
            <Footer />
        </div>
    )
};

export default TodoApp;