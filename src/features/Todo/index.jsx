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
    const [filterStatus, setFilterStatus] = useState('all');
    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        console.log(todo, idx)
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }
        setTodoList(newTodoList)
    }

    const handleShowAllClick = () => {
        setFilterStatus('all');
    }

    const handleCompletedClick = () => {
        setFilterStatus('completed');
    }

    const handleShowNewClick = () => {
        setFilterStatus('new');
    }

    const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    console.log('renderTodoList', renderTodoList);
    return (
        <div>
            TodoFeature
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show all</button>
                <button onClick={handleCompletedClick}>Show completed</button>
                <button onClick={handleShowNewClick}>Show new</button>
            </div>
        </div>
    );
}

export default TodoFeature;