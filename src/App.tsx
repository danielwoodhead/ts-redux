import * as React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './features/common/Header';
import HelloContainer from './features/hello/HelloContainer';
import ToDosContainer from './features/todo/components/ToDosContainer';
import ManageToDoContainer from './features/todo/components/ManageToDoContainer';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />

        <Route exact={true} path="/" component={ToDosContainer}/>
        <Route path="/todo/:id" component={ManageToDoContainer}/>
        <Route path="/hello" component={HelloContainer}/>
      </div>
    );
  }
}

export default App;
