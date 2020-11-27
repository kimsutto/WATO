import React from 'react';
import {Route, Link} from 'react-router-dom';
import {Container,Name,MenuWrapper,Menu} from './style.js';

const Header = () =>{
    return (
        <Container>
            <Name><Link to ='/'>WATO</Link></Name>
            <MenuWrapper>
                <Menu><Link to ='/'>Home</Link></Menu>
                <Menu><Link to ='/party'>Party</Link></Menu>
                <Menu><Link to ='/mypage'>MyPage</Link></Menu>
            </MenuWrapper>
        </Container>
    );
};

export default Header;