import * as React from 'react';
import './App.css';
// import HelloContainer from './features/hello/HelloContainer';
import ToDo from './features/todo/ToDoContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ToDo />
      </div>
    );
  }
}

export default App;
