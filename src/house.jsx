import React from 'react';

/* USING EVENTS eg. onClick, onBlur, onChange */ 
export const House = () => {

    // CREATED FUNCTION BELOW
    const printHello = () => {
        console.log("HELLO THERE");
    };

    return (
        <div>
            {/* USING FUNCTION BELOW onClick */}
            <button onClick={printHello}> Print Hello </button>
        </div>
    );
}