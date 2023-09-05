import React from 'react';
import {status} from '../utils';

export function SignUp(userData){
    return fetch('http://127.0.0.1:8000/web/users/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    }).then(status).catch(e => {console.log(e);
    })
}

export function auth(credentials){
    return fetch('http://127.0.0.1:8000/web/authenticate/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(status).catch(e => {console.log(e);
    })
}

export function ProfileSet(userData){
    return fetch('http://127.0.0.1:8000/web/users/profiles/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    }).then(status).catch(e => {console.log(e);
    })
}