import React from 'react';

//Styled Component
import styled from 'styled-components';

//Navigation
import { Link } from 'react-router-dom';

const Nav = () => {
    const menuOptions = {
        about: '<About Me />',
        portfolio: '<Portfolio />',
        contact: '<Contact Me />'
    }
    return (
        <StyledNav>
            <h1><a href='/'>Gabriel Santo</a></h1>
            <ul>
                <li><a href='/'>{menuOptions.about}</a></li>
                <li><a href='/portfolio'>{menuOptions.portfolio}</a></li>
                <li><a href='/contact'>{menuOptions.contact}</a></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 10rem;
    }
    a {
        color: white;
        text-decoration: none;
    }
`;

export default Nav;