import React,{useState} from 'react';
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom';
import netflix from '../SelectPlatform/partyImg/netflix.png';
import tving from '../SelectPlatform/partyImg/tving.png';
import watcha from '../SelectPlatform/partyImg/watcha.png';
import wavve from '../SelectPlatform/partyImg/wavve.png';
import Header from '../../components/Header'
import 'antd/dist/antd.css';
import {Input,Modal} from 'antd';
import Axios from 'axios';

const MakeParty = ({match}) => {
    //cav.utils.fromPeb(balance,"KLAY")
    const platform = match.params.platform;
    const [visible,setVisible] = useState(false);
    const [state,setState] = useState({
        partyName : '',
        platformId : '',
        platformPasswd : '',
        memberNum : '',
        price : ''
    });
    const {partyName, platformId, platformPasswd, memberNum, price} = state;
    const Container = styled.div`
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 15px;
        color: #5e5e5e;
    `;
    const Title = styled.div`
        font-size: 25px;
        font-weight: bold;
        margin-bottom : 50px;
    `;
    const Button2 = styled.button`
        margin-top : 20px;
        width: 30%;
        height: 40px;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        border-radius: 6px;
        border: solid 1px #5e5e5e;
        background: #5e5e5e;
    `;
    const Img = styled.img`
        width : 60px;
        margin-bottom : 20px;
    `;

    const HandleChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target.value;
        
        setState({
            ...state,
            [name] : value
        });
    }
    const showModal = () =>{
        setVisible(true);
    }
    const handleOk = e => {
        console.log(e);
        setVisible(false);
        document.location.href='/';
    };
    
    
    
    
    const PartyDeploy = () => {
        //param 추가 
        showModal();
        /*
        .then() => showModal

        Axios.post('http://localhost:3003/api/deployParty')
            .then((res)=>{
                console.log(res.data);
            })
            .catch((error)=>{
                console.log(error);
            });*/
    }
    return(
        <>
            <Header/>
            <Container>
                <Img src = {netflix}/>
                <Title>{platform} 파티 생성</Title>
                <label>파티명</label>
                <br/>
                <Input style={{width:'50%'}}  name = 'partyName' type="text" onChange={e => {state.partyName = e.target.value}}/>
                <br/>

                <label>{platform} ID</label>
                <br/>
                <Input style={{width:'50%'}} name = 'platformId' type="text" onChange={e => {state.platformId = e.target.value}}/>
                <br/>

                <label>{platform} PASSWORD</label>
                <br/>
                <Input style={{width:'50%'}} name = 'platformPasswd' type="password" onChange={e => {state.platformPasswd = e.target.value}}/>
                <br/>

                <label>모집 인원</label>
                <br/>
                <Input style={{width:'50%'}} name = 'memberNum' type="text" onChange={e => {state.memberNum = e.target.value}}/>
                <br/>

                <label>인원당 가격(PEB)</label>
                <br/>
                <Input style={{width:'50%'}} name = 'price' type="text" onChange={e => {state.price = e.target.value}} />
                <br/>
                <Modal
                    title="넷플릭스 파티 "
                    visible={visible}
                    onOk={handleOk}
                    >
                    <p>등록 완료</p>
                </Modal>

                <Button2 onClick={PartyDeploy}>등록하기</Button2>
            </Container>
        </>
    );
};

export default MakeParty;