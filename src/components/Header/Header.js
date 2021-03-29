import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/addEvent'>Add Event</Link></li>
            </ul>
        </div>
    );
};

export default Header;