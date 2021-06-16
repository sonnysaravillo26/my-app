import React, { useEffect, useState, useRef } from 'react';

export const Country = () => {

    // USING useState to set the inital value of the variable
    const [countryName, setCountryName] = useState("Philippines");

    // Changing countryName, from useState
    const changeCountry = () => {
        setCountryName("Singapore");
    }

    //USING useRef - not common use 
    const divRef = useRef();

    // Changing useRef DOM element value - using useRef
    const changeStyle = () => {
        console.log(divRef.current);
        // console.log(divRef.current.style.color = 'red');
    }

    // USING useEffect same concept like Page onload javascript
    useEffect(()=> {
        console.log("we are here");
    }, [])
    return (
        <div> 
            Welcome to my country 
            <br/>

            <button onClick={changeCountry}> change country </button>

            <br/>

            <input type="text" value={countryName} readOnly></input>

            <br/>

            <div ref={divRef} onClick={changeStyle}>
                HELLO THERE useRef
            </div>

        </div>
    );
};