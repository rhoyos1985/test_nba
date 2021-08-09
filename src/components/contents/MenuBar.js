import React from 'react';
import { Link } from 'react-router-dom';

export const MenuBar = () =>{
    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item " to="/">
                    NBA PLAYERS
                </Link>
            </div>
            <div className="navbar-menu">
                <Link className="navbar-item App-link" to="/">
                    Player List
                </Link>
                <Link className="navbar-item " to="/detail_player">
                    Player Detail
                </Link>
            </div>
        </nav>
    );
}