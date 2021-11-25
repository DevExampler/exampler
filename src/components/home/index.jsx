import React, { Component } from 'react';
import './index.css';

class Home extends Component {
    componentDidMount(){
      document.title = "Exampler | Inicio"
    }

    render() {
        return (
            <div className="content">
              Jeisson Gay
            </div>
        )
    }
}

export default Home;