import React, {Component} from 'react';
import "./styles/navbar.css"
class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <a className="navba-brand" href="#">Algorithm Visualizer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                     

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;