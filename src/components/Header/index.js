import React from 'react';
import {Route, Link} from 'react-router-dom';
import {Container,Name,MenuWrapper,Menu} from './style.js';
import logo from '../../images/Logo_black.png';

const Header = () =>{
    return (
        <Container>
            <Name><img src = {logo} /></Name>
            <MenuWrapper>
                <Menu><Link to ='/'>Home</Link></Menu>
                <Menu><Link to ='/selectplatform'>Party</Link></Menu>
                <Menu><Link to ='/mypage'>MyPage</Link></Menu>
            </MenuWrapper>
        </Container>
    );
};

export default Header;