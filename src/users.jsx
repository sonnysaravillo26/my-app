import React, { useState, useEffect } from 'react';
import axios from 'axios';

// https://randomuser.me/api

// USE AXIOS to fetch API
// to isntall : yarn add axios or npm install axios
// REFRENCE
// Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

const fetchData = () => {
    return (
        axios.get('https://randomuser.me/api')
            .then(res => {
                // handle success
                // console.log(res); 
                // console.log(JSON.stringify(res))
                console.log(JSON.stringify(res, null, 2))
                return JSON.stringify(res, null, 2) // <-- adding 'null' and '2' to fixed the alignment(space) of the json with the use of HTML Tag <pre>
            })
            .catch(err => {
                // handle error
                console.error(err);
            })
    );
};



export const Users = () => {
    const [dataUsers, setDataUsers] = useState(''); // <-- for userdataview 

    useEffect(() => {
        fetchData().then(dataUsers => {
            setDataUsers(dataUsers)
        })
    }, [])
    return (
        <div>
            <h5>Data</h5>
            <pre>
                {/* Showing to page */}
                {/* {dataUsers} */}
            </pre>
        </div>
    );
};