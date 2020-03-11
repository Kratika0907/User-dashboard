import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter , Switch, Route, Redirect } from "react-router-dom";
import {UserScreen} from './userscreen'
import {UserDetail} from './userdetail'



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  componentDidMount() {
    localStorage.setItem("modalFlag","false")
  }

  render() {
    return (
      <BrowserRouter>
      <div>
      <Switch>
      <Route exact path="/" component={UserScreen}/>
      <Route exact path="/:id" component={UserDetail}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
