import React from 'react';
import {Spinner} from 'spin.js';
import Header from '../../components/Header'
const Payment = () => {

    const showSpinner=() =>{
        var target = document.getElementById("spin");
        return new Spinner(opts).spin(target);
    };
    return(
        <>
            <Header/>
            <div>
                <label> KLAY 전송 </label>
                <div id= "spin"></div>
                <div>
                    <input type = "number" id ="amount"/>
                    <button type = "button" onClick={deposit}>송금</button>
                </div>
            </div>
        </>
    );
};

export default Payment;