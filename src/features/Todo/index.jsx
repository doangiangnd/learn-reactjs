import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'code',
            status: 'new'
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        console.log(todo, idx)
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }
        setTodoList(newTodoList)
    }

    return (
        <div>
            TodoFeature
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;