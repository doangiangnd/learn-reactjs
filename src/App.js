import { useEffect, useState } from 'react';
import AlbumFeature from './features/Album';
import ColorBox from './features/ColorBox';
import PostList from './features/PostList';
// import './App.css';
import TodoFeature from './features/Todo';
import TodoForm from './features/TodoForm';
import TodoList from './features/TodoList';

function App() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'https://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostList();
  }, [])
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'i love frontend' },
    { id: 2, title: 'i love frontend' },
    { id: 3, title: 'i love frontend' }
  ])

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    console.log('formValues', formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);

  }
  return (
    <div className="App">
      <TodoFeature />
      <AlbumFeature />
      <PostList posts={postList} />
      <ColorBox />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default App;
