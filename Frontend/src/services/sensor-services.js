import React from 'react';
import {status} from '../utils';

export function ReadSensors(num){
    return fetch('http://127.0.0.1:8000/api/sensors/sensorsvaluse/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(num)
    }).then(status).catch(e => {console.log(e);
    })
}