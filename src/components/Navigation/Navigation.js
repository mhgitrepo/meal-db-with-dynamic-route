import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
           <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>Meal</Link>
                </li>
            </ul> 
        </nav>
    );
};

export default Navigation;