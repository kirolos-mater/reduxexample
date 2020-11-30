import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/Postform';



class App extends Component {



  render() {

    return (
      <div>
        <PostForm />
        <Posts />
      </div>
    )

  }

}

export default App;