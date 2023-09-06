import React, {useEffect, useState} from 'react';
import {ReadSensors} from "../../services/sensor-services";
import {useFetchSensors} from "../fetchs/fetchdata";

const Sensors = () => {

    const [Data,setData] = useState('');
    const [sensor, loading, error] = useFetchSensors();

    useEffect(() => {
        const validated_data = (data) => {
            let mergedObj = [];
            try {
                Object.keys(data).forEach(key => {
                    mergedObj[key] = [
                        ...Object.values(data[key]),
                        // ...selectedShift[key]
                    ];
                });
                console.log(mergedObj);
                let validpressue = [];
                mergedObj.forEach((value,index) => {
                    validpressue[index]= value[1]
                });
                let validtemp = [];
                mergedObj.forEach((value,index) => {
                    validtemp[index]= value[2]
                });
                let validdate = [];
                mergedObj.forEach((value,index) => {
                    validdate[index]= value[3]
                });
                console.log(validdate.slice(-20));
            }catch (error){
                console.log(error);
            }
        }
        validated_data(sensor);
    }, [sensor]);

    return (
        <div>
            {sensor && sensor.map((data, index) => (
                <div key={index}>
                    <p>Hospital: {data.hospital}</p>
                    <p>Pressure: {data.pressure}</p>
                    <p>Temperature: {data.temp}</p>
                    <p>Datetime: {data.datetime}</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default Sensors;