import React, {useEffect, useState} from 'react';
import {ReadSensors} from "../../services/sensor-services";
import {useFetchSensors} from "../fetchs/fetchdata";
import { LineChart } from '@mui/x-charts/LineChart';
import dayjs from 'dayjs';
import CustomLinechart from "./linechart";

const Sensors = () => {

    const [Data,setData] = useState('');
    const [sensor, loading, error] = useFetchSensors({num:'20'});
    const [MergedData, setMergedData]=useState([]);
    const dayjs = require('dayjs');
    const utc = require('dayjs/plugin/utc');
    const timezone = require('dayjs/plugin/timezone');
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const userTimeZone = dayjs.tz.guess();
    console.log(userTimeZone);
    useEffect(() => {
        const validated_data = (mydata) => {
            try {
                let mergedObj = [];
                Object.keys(mydata).forEach(key => {
                    mergedObj[key] = mydata[key];
                });
                const reformattedData = mergedObj.map((item,index) => ({
                    // datetime: new Date(item.datetime).toLocaleTimeString(),
                    // datetime: dayjs(item.datetime).utc().format('YYYY-MM-DD HH:mm:ss'),
                    datetime: dayjs(item.datetime).utc().format('HH:mm:ss'),
                    pressure: item.pressure,
                    tempin: item.tempin,
                    tempout: item.tempout,
                    purity: item.purity,
                }));
                setMergedData(reformattedData.reverse());
                console.log(MergedData);
            }catch (error){
                console.log(error);
            }
        }
        validated_data(sensor);
    }, [sensor]);

        return (
            <div>
            {MergedData[1] !== undefined &&<>
                <CustomLinechart Dataset={MergedData} Series={{dataKey: 'pressure', label: 'pressure is', color: 'red', showMark: true }}
                                 XAxis={{dataKey: "datetime", scaleType:'band',label:'Pressure of O2'}}/>
                <CustomLinechart Dataset={MergedData} Series={{dataKey: 'purity', label: 'purity in % is', color: 'green', showMark: true }}
                                 XAxis={{dataKey: "datetime", scaleType:'band',label:'Purity of  O2 in %'}}/>
                <CustomLinechart Dataset={MergedData} Series={{dataKey: 'tempin', label: 'inside temp is', color: 'yellow', showMark: true }}
                                                      XAxis={{dataKey: "datetime", scaleType:'band',label:'Temprature of O2'}}/>
                <CustomLinechart Dataset={MergedData} Series={{dataKey: 'tempout', label: 'outside temp is', color: 'blue', showMark: true }}
                                 XAxis={{dataKey: "datetime", scaleType:'band',label:'Room Temprature'}}/>
            </>
            }
            </div>
    );
}

export default Sensors;