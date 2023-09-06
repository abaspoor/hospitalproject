import React from 'react';
import {status} from '../utils';

export function ReadSensors(){
    return fetch('http://127.0.0.1:8000/api/sensors/')
        .then(status).catch(e => {console.log(e);
    })
}