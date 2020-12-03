import React from 'react';
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom';
import netflix from '../SelectPlatform/partyImg/netflix.png';
import Header from '../../components/Header';
import Axios from 'axios';
import {List, Avatar,} from 'antd';


const MyPage = () => {
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

    const[parties, setParties] = React.useState([
    ]);
    const[owners, setOwners] = React.useState([

    ]);
    //const myAddress = JSON.parse(sessionStorage.getItem('walletInstance')).address;
    const myAddress = '0xfeC7739beD0ae674d4F21a5E635cc88A1a90a1Ee';
    React.useEffect(()=> {
        if(myAddress === null){
            document.location.href = "/";
        }
        GetMyParty();
        GetOwnerParty();
    },[]);

    const GetMyParty = () => {
        const url = `http://localhost:3003/mypage/${myAddress}`;
        Axios.get(url)
         .then((response)=> {
            setParties(response.data.items);
            //setParties(parties.concat(response.data.items));
         })
         .catch((error)=>{
            console.log(error);
        });
    };

    const GetOwnerParty = () => {
        const url = 'http://localhost:3003/api/partylist';
        Axios.get(url)
            .then((response)=>{
                const filters = response.data.filter(w => w[4]==myAddress);
                setOwners(filters);
            })
            .then((response)=>{
                
            })
            .catch((error)=>{
                console.log(error);
            });
    };
    
    const list = parties.map( p =>(
        <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={netflix}/>}
              title={p.transactionHash.slice(0,20)+'...'}
              description={p.value}
            />
        </List.Item>
    ));
    
    const OwnerList = owners.map( o => {
        return(
        <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={netflix}/>}
              title={o[5].slice(0,20)+'...'}
              description='몇 명 결제중 + 여기에 bar표시'
            />
        </List.Item>
        );
    });
    const OpenDetail = () =>{
        <p><a href='https://baobab.klaytnscope.com/tx/${receipt.txHash}' target='_black'>클레이튼 스코프에서 확인 </a></p>
    }
    const openModal = () =>{
        <div>
        <p>파티장과 파티원은 무엇인가요? </p>
        <p>파티장은 모든 파티원의 결제가 완료되면 플랫폼 구독 후 자신의 회원정보를 공유해요.</p>
        <p>파티원은 결제를 하고 파티장의 회원정보로 플랫폼을 이용해요.</p>
        </div>
    };

    return(
        <>
            <Header/>
            <p>구독 중 : </p>
            <p>구독 중인 매칭이 없습니다</p>
            <Container>
                
                <Title>참여한 파티</Title>
            </Container>
                <List
                    itemLayout="horizontal"
                    dataSource={parties}>
                    {list}
                </List>
            <Container>
                <Title>등록한 파티</Title>
            </Container>
            <List
                    itemLayout="horizontal"
                    dataSource={owners}>
                    {OwnerList}
                </List>
                
            
        </>
    );
};

export default MyPage;