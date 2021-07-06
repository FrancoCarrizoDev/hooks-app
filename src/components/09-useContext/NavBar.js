import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link className="navbar-brand" to="/">UseContext</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/" exact>Home <span className="sr-only">(current)</span></NavLink>                        
                    <NavLink activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" to="login">Login</NavLink>
                </div>
            </div>

        </nav>
    )
}
