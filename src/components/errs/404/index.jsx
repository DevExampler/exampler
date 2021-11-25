import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Err404 extends React.Component {
    componentDidMount(){
        document.title = "Pagina No Encontrada | Error 404";
    }
    render(){
    return(
        <div className="page-not-found-container">
            <div className="divisor-404">
                <div className="error-title">
                    Error 404
                </div>
                <div className="error-img-container">
                    <div className="phrase-404">
                        ¡Oops!, Esto no es un anime.
                    </div>
                    <div className="img-404">
                        <img src="https://i.ibb.co/LQfVJbt/error404.png" alt=""/>
                    </div>
                </div>
                <div className="link-404">
                    <Link to="/">Ir al inicio</Link>
                </div>
            </div>
        </div>
    )
    }
}

export default Err404;