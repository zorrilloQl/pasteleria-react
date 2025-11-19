import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../atoms/Logo';
import NavLinks from '../molecules/NavLinks';
import UserMenu from '../molecules/UserMenu';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <Logo width={140} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
                <NavLinks />
                <div className="d-flex">
                    <UserMenu />
                </div>
            </div>
        </div>
    </nav>
);

export default Header;
