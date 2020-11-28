import React from 'react';
import Caver from "caver-js";
import styled from 'styled-components';
import Header from '../../components/Header'
import Axios from 'axios';


const Login = () => {
    
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
    const state = {
        address : '',
        balance : '',
    }
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
/*
    const CreateAccount = () => {
        Axios.get("api")
            .then((response) =>{
                let res = JSON.parse(response.data);
                localStorage.setItem("myAddress", res["address"]);
                setIsLoggedIn(true);
            });
    };
*/
    const BeforeLogin = () => {
        <Button onClick={LoginModal}>클레이튼 계정 만들기</Button>
    };

    const AfterLogin = () => {
        const current = this.state;
        return(
            <div>
                <p>Address : {current.address.slice(0,8)}... {current.address.slice(16,22)}</p>
                <p>Balance : {Caver.utils.toDecimal(current.balance)} KLAY</p>
            </div>
        );
    };

    const HandleImport = () => {

    };

    const HandlePassword = () => {

    };
    
    const HandleLogin = () => {

    };
    
    const LoginModal = () =>{
        return(
            <>
                <label for = "input-keystore">Keystore</label>
                <input type="file" id = "input-keystore" onChange={HandleImport}></input>

                <label for = "input-password">비밀번호</label>
                <input type="password" id = "input-password" onChange={HandlePassword}></input>
                <p id = "message"></p>
                <div>
                    <Button>닫기</Button>
                    <Button onClick={HandleLogin}>제출</Button>
                </div>
            </>
        );
    };

    return(
        <>  
            <Header/>
            <Container>
                <Title>클레이튼 지갑</Title>
                {isLoggedIn ? 
                    ({AfterLogin}) : (BeforeLogin)}
            </Container>
        </>
    );

    

};

export default Login;


