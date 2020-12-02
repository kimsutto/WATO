import React,{useState} from 'react';
import styled from 'styled-components';
import {Route, Link} from 'react-router-dom';
import './party.css';
import net from './partyImg/netflix.png';
import wat from './partyImg/watcha.png';
import wav from './partyImg/wavve.png';
import tvi from './partyImg/tving.png';
import net2 from './partyImg/netflix2.png';
import wat2 from './partyImg/watcha2.png';
import wav2 from './partyImg/wavve2.png';
import tvi2 from './partyImg/tving2.png';

import Header from '../../components/Header'

const SelectPlatform = () => {
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
        color : black;
        margin-bottom : 50px;
    `;

    const [state,setState] = React.useState({
        net : false,
        wat : false,
        wav : false,
        tvi : false,
        btnDisabled : true,
        platform : ''
    })

    const handleClickNet = (e) => {
        e.preventDefault(); 
        setState({
            ...state,
            net : true,
            platform : 'netflix'
        });
    };
    const handleClickWat = (e) => {
        e.preventDefault(); 
        setState({
            ...state,
            wat : true,
            platform : 'watcha'
        });
    };
    const handleClickWav = (e) => {
        e.preventDefault(); 
        setState({
            ...state,
            wav : true,
            platform : 'wavve'
        });
    };
    const handleClickTv = (e) => {
        e.preventDefault(); 
        setState({
            ...state,
            tvi : true,
            platform : 'tving'
        });
    };
    return(
        <>
            <Header/>
            <Container>
                <div className="selectPlatform">
                    
                    <Title>원하는 플랫폼을 선택해주세요!</Title>
                    <div className="platforms">
                        <form className="netflix">
                            <button onClick={handleClickNet} className="net"> {state.net ? <img src = {net} alt="netflix" width="100px"/> : <img src = {net2} alt="netflix2" width="100px"/>} </button>
                            <label>Netflix</label>
                        </form>
                        <form className="watcha">
                            <button onClick={handleClickWat} className="wat">{state.wat ? <img src = {wat} alt="watcha" width="100px"/> : <img src = {wat2} alt="watcha2" width="100px"/>}</button>
                            <label>Watcha</label>
                        </form>
                        <form className="wavve">
                            <button onClick={handleClickWav} className="wav">{state.wav ? <img src = {wav} alt="wavve" width="100px"/> : <img src = {wav2} alt="wavve2" width="100px"/>}</button>
                            <label>Wavve</label>
                        </form>
                        <form className="tving">
                            <button onClick={handleClickTv} className="tvi">{state.tvi ? <img src = {tvi} alt="tving" width="100px"/> : <img src = {tvi2} alt="tving2" width="100px"/>}</button>
                            <label>Tving</label>
                        </form>
                    </div>
                    <button className ="btn" disabled={state.btnDisabled}><Link to ={`/selectrole/${state.platform}`}>NEXT</Link></button>
                    <br/>
                </div>
            </Container>
        </>
    );
};

export default SelectPlatform;