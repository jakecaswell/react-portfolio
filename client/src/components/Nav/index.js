import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

const Nav = (props) => {
    const {
        tabs = [],
        currentTab,
        setCurrentTab
    } = props;

    return (
        <header>
            <nav>
                <ul className='d-flex justify-content-end navbar'>
                    <li className='list-item'>
                        <a href='#about' onClick={() => setCurrentTab('About Me')}>About Me</a>
                    </li>
                    <li className='list-item'>
                        <a href='#projects'onClick={() => setCurrentTab('Projects')}>My Work</a>
                    </li>
                    <li className='list-item'>
                        <a href='#contact'onClick={() => setCurrentTab('Contact Me')}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;