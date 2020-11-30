import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Posts from './components/Posts';
import PostForm from './components/Postform';

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {



  render() {

    return (
      <Provider store={store}>
        <div>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    )
  }

}

export default App;