import * as React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';
import './index.css';
import $ from 'jquery';

// Desplamiento hasta el borde superior de la página
 function onClickUp(){
    scroll.scrollToTop();
 }

class Header extends React.Component{
    componentDidMount(){
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > $("#cambio").offset().top - 0) {
                $(".header-top").addClass("active");
                $(".sidebar-header").addClass("active");
            } else {
                $(".header-top").removeClass("active");
                $(".sidebar-header").removeClass("active");
            };
        });
    }
    render(){
        return(
            <>
                <div className="header-top">
                    <div className="header-logo">
                        <div className="exampler-logo">
                            Exampler
                            <span className="by-logo">By</span>
                        </div>
                        <div className="blurplee-header">
                            <span className="blurplee-logo">
                                <svg className="bluplee-logo" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M3731 8714 l-734 -1225 -61 -36 c-299 -179 -628 -446 -859 -698 -604 -657 -956 -1432 -1053 -2318 -35 -314 -20 -758 37 -1084 202 -1176 922 -2202 1963 -2798 482 -276 1031 -448 1611 -506 155 -16 575 -16 730 0 1108 111 2080 638 2771 1502 90 112 260 366 339 503 271 474 439 1002 501 1569 23 205 23 609 0 814 -95 872 -435 1631 -1023 2286 -236 263 -578 544 -889 730 l-61 36 -734 1225 -734 1225 -535 0 -535 0 -734 -1225z"/></g></svg>   
                            </span>
                            Blurplee
                        </div>
                    </div>
                    <nav className="header-nav-links">
                        <Link to="/" className="up" onClick={onClickUp()}>Inicio</Link>
                        <Link to="/examples">Examples</Link>
                    </nav>
                </div>
                <div id="cambio"></div>
                <div className="sidebar-header">
                    <ul>
                        <li>
                            <span className="sidebar-list-title blurplee">Blurplee</span>
                            <ul>
                                <li>adas</li>
                            </ul>
                        </li>
                        <li>
                            <span className="sidebar-list-title aodesu">AoDesu</span>
                            <ul>
                                <li>adas</li>
                            </ul>
                        </li>
                        <li>
                            <span className="sidebar-list-title aodownloader">AoDownloader</span>
                            <ul>
                                <li>adas</li>
                            </ul>
                        </li>
                        <li>
                            <span className="sidebar-list-title">Modaly</span>
                            <ul>
                                <li>adas</li>
                            </ul>
                        </li>
                        <li>
                            <span className="sidebar-list-title conqueror">Conqueror</span>
                            <ul>
                                <li>adas</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </>
            )
    }
}

export default Header;