import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to the "Meal Db."</h1>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/meals">Meals</CustomLink>
                <CustomLink to="/mealsearch">Meal Search🔎</CustomLink>
            </nav>
        </div>
    );
};

export default Header;