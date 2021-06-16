import React, { useState } from 'react';

export const Counting = () => {
    const [counter, setCounter] = useState(0);

    const plusOne = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <p>
                {counter}
            </p>
            <button onClick={plusOne}>+1 Count sample</button>
            <br />
            <br />
            <button onClick={() => setCounter(counter + 1)}>+1 Count Sample2</button>

        </div>
    );
}