import * as React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import HelloContainer from './features/hello/HelloContainer';
import TodosPageContainer from './features/todo/components/ToDosContainer';
import ManageToDoContainer from './features/todo/components/ManageToDoContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Route exact={true} path="/" component={TodosPageContainer}/>
        <Route path="/todo/:id" component={ManageToDoContainer}/>
      </div>
    );
  }
}

export default App;
