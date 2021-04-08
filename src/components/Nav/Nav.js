import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="top-banner">
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">COSMETICS SHOP</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto d-flex align-items-center">
                            <Link class="nav-link" to="/home">HOME</Link>
                            <Link class="nav-link" to="/orders">ORDERS</Link>
                            <Link class="nav-link" to="/admin">ADMIN</Link>
                            <Link class="nav-link" to="/deal">DEAL</Link>
                            {loggedInUser.name ? <Link class="nav-link active" to="/">{loggedInUser.name}</Link> : <Link to="/login"><button class="btn btn-dark" type="login">LOGIN</button></Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Nav;