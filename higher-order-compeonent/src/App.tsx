import React from "react";
import TodoList from "./component/TodoList";
import SearchUsers from "./component/UsersList";

function App() {
  return (
    <div className="App">
      <SearchUsers />
      <TodoList />
    </div>
  );
}

export default App;
