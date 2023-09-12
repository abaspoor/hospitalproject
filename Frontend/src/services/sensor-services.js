import React from 'react';
import {status} from '../utils';

export function ReadSensors(num){
    return fetch('https://monitorbackend.iran.liara.run/api/sensors/sensorsvaluse/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(num)
    }).then(status).catch(e => {console.log(e);
    })
}