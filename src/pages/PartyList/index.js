import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom';
import netflix from '../SelectPlatform/partyImg/netflix.png';
import Header from '../../components/Header';
import Axios from 'axios';
import {List, Avatar,Button, message, Spin} from 'antd';

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

const PartyList = ({match}) => {
    const platform = match.params.platform;
    const pk = JSON.parse(sessionStorage.getItem('walletInstance')).privateKey;
    const [loading, setLoading] = useState(false);
    const [parties, setParties] = React.useState([
            {
                partyTitle : '',
                platform : '',
                platformId : '',
                platformPasswd : '',
                partyOwner : '',
                partyContract : '',
                partyStatus: 0,
                modal : false
            }
        ]);
    
    useEffect(()=> {
        GetParty();
    },[]);

    //플랫폼 별 필터로 수정
    let loadParty = [];
    const GetParty = () =>{
        Axios.get('http://localhost:3003/api/partylist')
            .then((response)=>{
                 loadParty= { 
                    partyTitle : response.data[0][0],
                    platform : response.data[0][1],
                    platformId : response.data[0][2],
                    platformPasswd : response.data[0][3],
                    partyOwner : response.data[0][4],
                    partyContract : response.data[0][5],
                    partyStatus : response.data[0][6]
                };
            })
            .then((response)=>{
                setParties(parties.concat(loadParty));
            })
            .catch((error)=>{
                console.log(error);
            });
    };
    const info = () => {
        message.success({
            content: '결제 완료',
            className: 'custom-class',
            style: {
              marginTop: '20vh',
            },
          });
    };
    const Payment = () =>{
        const thash = '0x3ae7cd3d0e949065fe7075864b027ff8ae521eda';
        //const ppk = '0x5c9286585b6d59ece65a19b14d11eef3cced3481bbd1d77df4174044dd8de72b';
        const url = `http://localhost:3003/paymentParty/${thash}/${pk}`;
        setLoading(true);
        Axios.get(url)
        .then((response)=>{
            console.log(response.data.blockHash);
        })
        .then((response)=>{
            setLoading(false);
            info();
            //로딩 false 하고 결제완료 하고 이동 버튼 띄우기 
        })
        .catch((error)=>{
            console.log(error);
        });
    };

    
    
    const filterParty = parties.filter(party => party.platform.includes('net'));
    const list2 = filterParty.map( p =>(
        <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={netflix}/>}
              title={p.platform}
              description={p.partyOwner.slice(0,20)+'...'}
            />
            <Button onClick={Payment}>참여</Button>
        </List.Item>
    ));
    
    //props 넘어온 값으로 필터링해서 partyList 보여주기 
    /*
    let toDoList = 로딩 화면
    if (!loading) toDoList = 로딩이 끝나면 보여줄 내용

    */
    return(
        <>
            <Header/>
            <Container>
                <Title>파티 선택</Title>
                {loading ? <Spin /> : (<p></p>)}
            </Container>
                <List
                    itemLayout="horizontal"
                    dataSource={filterParty}>
                {list2}
                </List>
        </>
    );
};

export default PartyList;