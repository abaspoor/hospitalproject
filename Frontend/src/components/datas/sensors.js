import React, {useEffect, useState} from 'react';
import {ReadSensors} from "../../services/sensor-services";
import {useFetchSensors} from "../fetchs/fetchdata";
import { LineChart } from '@mui/x-charts/LineChart';
import dayjs from 'dayjs';

const Sensors = () => {

    const [Data,setData] = useState('');
    const [sensor, loading, error] = useFetchSensors({num:'30'});
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
                    datetime: dayjs(item.datetime).utc().format('YYYY-MM-DD HH:mm:ss'),
                    myid:index,
                    pressure: item.pressure,
                    temp: item.temp,
                }));
                setMergedData(reformattedData.reverse());
                console.log(MergedData);
            }catch (error){
                console.log(error);
            }
        }
        validated_data(sensor);
    }, [sensor]);

    const keyToLabel = {
        pressure: "Pressure is ",
        temp: "Temprature is "
    };

    const colors = {
        pressure: "black",
        temp: "red"
    };
    const axis = {
        pressure: "leftAxisId",
        temp: "rightAxisId"
    }

    const stackStrategy = {
        stack: "total",
        area: true,
        stackOffset: "none" // To stack 0 on top of others
    };

    const customize = {
        height: 300,
        legend: { hidden: false },
        margin: { top: 5 },
        stackingOrder: "descending"
    };
        return (
            <div>
            {MergedData[1] !== undefined &&
            <LineChart
                xAxis={[
                    {
                        dataKey: "datetime",
                        scaleType:'band',
                    }
                ]}
                series={Object.keys(keyToLabel).map((key) => ({
                    dataKey: key,
                    label: keyToLabel[key],
                    color: colors[key],
                    showMark: true,
                    yAxisKey: axis[key],
                }))}
                yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
                rightAxis="rightAxisId"
                dataset={MergedData}
                {...customize}
            />}
            </div>
    );
}

export default Sensors;