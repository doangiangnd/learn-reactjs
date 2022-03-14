import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'eat'
        },
        {
            id: 2,
            title: 'sleep'
        },
        {
            id: 3,
            title: 'code'
        }
    ];
    return (
        <div>
            TodoFeature
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;