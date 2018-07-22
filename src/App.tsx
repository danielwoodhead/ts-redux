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

        <div className="container-fluid">
          <Route path="/" component={ToDosContainer} exact={true}/>
          <Route path="/todo/:id" component={ManageToDoContainer}/>
          <Route path="/todo" component={ManageToDoContainer} exact={true}/>
          <Route path="/hello" component={HelloContainer}/>
        </div>
      </div>
    );
  }
}

export default App;
