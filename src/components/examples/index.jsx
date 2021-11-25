import React, { Component } from 'react';

class Examples extends Component {
    componentDidMount(){
      document.title = "Exampler | Inicio"
    }

    render() {
        return (
            <div className="content content-example">
              View Exampler
            </div>
        )
    }
}

export default Examples;