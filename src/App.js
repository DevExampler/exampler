import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ExamplerApp from './router/index.jsx';

class App extends Component {
  render(){
    return (
      <Router>
        <ExamplerApp />
      </Router>
    )
  }
}

export default App;