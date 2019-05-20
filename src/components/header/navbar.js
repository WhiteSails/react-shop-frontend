import { React, Component } from 'react';

class Nav extends Component {
    render () {
        return (
            <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <button className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                         id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <button className="btn">View Cart</button>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
        )
    };


}


export default Nav;