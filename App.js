import React, {Fragment} from 'react';
import './App.css';
// import components
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {


  return (
    <Fragment>
      <div className="container">
        <div className="heading">
          <h1 className="text-center mt-3">To-Do List</h1>
        </div>
        <InputTodo/>
        <ListTodos />
      </div>

    </Fragment>
  );
}

export default App;
