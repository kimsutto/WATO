import React,{useState} from 'react';
import Caver from 'caver-js';
import styled from 'styled-components';
import Header from '../../components/Header'
import logo from '../../images/logo.jpg';

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
        margin-top : 30px;
        width: 100px;
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
        width : 200px;
        font-weight: bold;
        margin-bottom : 50px;
    `;

    const Wrapper = styled.div`
        background-color : #cccbcb;
        width : 300px;
        height : 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius : 15px;
        color : black;
    `;

    const Label = styled.label`
        margin-top : 20px;
        font-size : 20px;
        color : black;
    `;


    const config = {
        rpcURL : 'https://api.baobab.klaytn.net:8651'
    }
    const cav = new Caver(config.rpcURL);
    
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [auth, setAuth] = React.useState({
        keystore : '',
        password : ''
    });
    const [account, setAccount] = React.useState({
        address : '',
        balance : ''
    });
    
    React.useEffect(
        () =>{
            if(sessionStorage.getItem('walletInstance')){
                setIsLoggedIn(true);
                const walletFromSession = sessionStorage.getItem('walletInstance');
                cav.klay.getBalance(JSON.parse(walletFromSession).address)
                    .then(res =>{
                        setAccount({
                            ...account,
                            balance : res
                        })
                    })
                setAccount({
                    ...account,
                    address : JSON.parse(walletFromSession).address
                });
            }
            
        },[],
    );

    const HandleImport = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0]);
        fileReader.onload = e => {
            try{
                if(!checkValidKeyStore(e.target.result)){
                    console.log('유효하지 않은 키스토어 파일');
                    return;
                }
                auth.keystore = e.target.result;
            }catch (e){
                console.log('유효하지 않은 키스토어 파일');;
            }
        }
    };

    const checkValidKeyStore = keystore => {
        const parsedKeystore = JSON.parse(keystore);
        const isValidKeystore = parsedKeystore.version &&
            parsedKeystore.id &&
            parsedKeystore.address &&
            parsedKeystore.crypto;

        return isValidKeystore;
    }

    const HandlePassword = e => {
        auth.password = e.target.value;
        //setAuth({
          //  ...auth,
            //[e.target.name] : e.target.value
        //});
    };
    
    const HandleLogin = e => {
            try{
                console.log(auth.keystore);
                console.log(auth.password);
                const privateKey = cav.klay.accounts.decrypt(auth.keystore,auth.password).privateKey;
                integrateWallet(privateKey);
            }catch(e){
                console.log('비밀번호 불일치');
            }
    };

    const integrateWallet = privateKey => {
        //private key 사용해 walletInstance(user Info) 가져옴
        const walletInstance = cav.klay.accounts.privateKeyToAccount(privateKey);
        
        //쉽게 인스턴스를 다시 불러와 트랜잭션 처리 가능 
        cav.klay.accounts.wallet.add(walletInstance);
        sessionStorage.setItem('walletInstance',JSON.stringify(walletInstance));
        setAccount({
            address : walletInstance.address
        });
        setIsLoggedIn(true);
    }

    const HandleLogout = () =>{
        cav.klay.accounts.wallet.clear();
        sessionStorage.removeItem('walletInstance');
        setAuth({
            keystore : '',
            password : ''
        });
        setIsLoggedIn(false);
    }
    
    return(
        <>  
            <Header/>
            <Container>
                
                <Title><img src = {logo} /></Title>
                {isLoggedIn ? 
                    (<Wrapper>
                        <br/>
                        <br/>
                        <p>Address : {account.address.slice(0,8)}... {account.address.slice(16,22)}</p>
                        <p>peb : {account.balance} </p>
                        <div>
                            <Button onClick={HandleLogout}>로그아웃</Button>
                        </div>
                    </Wrapper>) : 
                    (<Wrapper>
                        <p></p>
                        <Label for = "input-keystore">Keystore File</Label>
                        <br/>
                        <input type="file" onChange={HandleImport}></input>
                        <br/>
                        <Label for = "input-password">Password</Label>
                        <br/>
                        <input type="password" onChange={HandlePassword}></input>
                        <br/>
                        <div>
                            <Button onClick={HandleLogin}>로그인</Button>
                        </div>
                    </Wrapper>)}
            </Container>
        </>
    );
};

export default Login;


