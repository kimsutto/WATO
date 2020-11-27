import React from 'react';
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom';
import Header from '../../components/Header'

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    color: #5e5e5e;
`;

const Button = styled.button`
    margin-top : 50px;
    width: 30%;
    height: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 6px;
    border: solid 1px #5e5e5e;
    background: #5e5e5e;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-bottom : 50px;
`;

const Home = () => {
    return(
        <>
            <Header/>
            <Container>
                <Title>Watch Together!</Title>
                <p>보고싶은 영화, 드라마, 예능!</p>
                <p>우리 같이 싸게 볼래?</p>
                <br/>
                <p>WATO는 ott 플랫폼의 계정을 파티원들과</p>
                <p>공유하여 요금을 나누어 낼 수 있는</p>
                <p>파티를 매칭해줍니다!</p>
                
                <Button><Link to ='/login'>시작하기</Link></Button>
            </Container> 
        </>
    );
};

export default Home;