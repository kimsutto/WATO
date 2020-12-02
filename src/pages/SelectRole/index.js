import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Partier.css';
import styled from 'styled-components';
import pa from './roleImg/partier.png';
import ho from './roleImg/host.png';
import pa2 from './roleImg/partier2.png';
import ho2 from './roleImg/host2.png';
import Header from '../../components/Header'

const SelectRole = ({match}) => {
    const platform = match.params.platform;

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
    const [state, setState] = React.useState({
        pa: false,
        ho: false,
        btnDisabled: true,
    });
    
    const handleClickHost = (e) =>{
        e.preventDefault();
        setState({
            ...state,
            ho : true
        });
    };

    const handleClickMem = (e) =>{
        e.preventDefault();
        setState({
            ...state,
            pa : true
        });
    }

    return(
        <>
            <Header/>
            <Container>
            <div className="partiers">
                
                <Title>파티장과 파티원 중 선택해주세요!</Title>
                <div className="select">
                    <form className="host">
                        <button onClick={handleClickHost} className="h">{state.ho ? <img src = {ho} alt="host" width="120px"/> : <img src = {ho2} alt="host2" width="100px"/>} </button>
                        <label>파티장</label>
                    </form>
                    <form className="partier">
                        <button onClick={handleClickMem} className="p">{state.pa ? <img src = {pa} alt="partier" width="120px"/> : <img src = {pa2} alt="partier2" width="100px"/>} </button>
                        <label>파티원</label>
                    </form>
                </div>
                {state.ho ? (
                    <button className ="btn1" disabled={state.btnDisabled}><Link to ={`/makeparty/${platform}`}>파티 등록</Link></button>
                ):(
                    <button className ="btn1" disabled={state.btnDisabled}><Link to ={`/partylist/${platform}`}>파티 찾기</Link></button>
                )}
                
                <button className ="btn2"><Link to ='/selectplatform'>PREV</Link></button>
            </div>
            </Container>
        </>
    );
};
export default SelectRole;