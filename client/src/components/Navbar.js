import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
//import logo from '../logo.svg';

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-dark bg-dark-green">
                <Link className="navbar-brand" to="/">
                    {/* <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo"/> */}
                    Blog Article
                </Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-article">Add Article</Link>
                    </li>
                </ul>
            </nav>
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`
    .bg-dark-green {
        background: var(--dark-green);
    }

    .navbar-nav {
        display: flex;
        flex-direction: row;
    }

    .nav-item {
        margin-left: 30px;
        padding: 0 10px;

        &:hover {
            background: var(--light-green);
        }
    }

    .navbar-dark .navbar-nav .nav-link {
        color: #fff;
    }
`;
