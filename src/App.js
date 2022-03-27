import { useEffect, useState } from 'react';
import AlbumFeature from './features/Album';
import ColorBox from './features/ColorBox';
import Pagination from './features/Pagination';
import PostList from './features/PostList';
import queryString from 'query-string'
// import './App.css';
import TodoFeature from './features/Todo';
import TodoForm from './features/TodoForm';
import TodoList from './features/TodoList';

function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 1,
    _totalRows: 1
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  })

  useEffect(() => {
    async function fetchPostList() {
      setIsLoading(true);
      try {

        const paramString = queryString.stringify(filters)
        const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination)
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchPostList();
  }, [filters])
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
  function handlePageChange(newPage) {
    console.log("newPage", newPage);
    setFilters({
      ...filters,
      _page: newPage
    })
  }
  return (
    <div className="App">
      <TodoFeature />
      <AlbumFeature />
      <PostList isLoading={isLoading} posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <ColorBox />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default App;
