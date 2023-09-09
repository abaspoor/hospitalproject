import React, {useEffect, useState} from 'react';
import {ReadSensors} from "../../services/sensor-services";
import {useFetchSensors} from "../fetchs/fetchdata";
import {Typography} from "@mui/material";
import { LineChart } from '@mui/x-charts/LineChart';

const Sensors = () => {

    const [Data,setData] = useState('');
    const [sensor, loading, error] = useFetchSensors({num:'30'});
    const [MergedData, setMergedData]=useState([]);
    useEffect(() => {
        const validated_data = (mydata) => {

            try {
                let mergedObj = [];
                // Object.keys(data).forEach(key => {
                //     mergedObj[key] = [
                //         ...Object.values(data[key]),
                //         // ...selectedShift[key]
                //     ];
                // });
                Object.keys(mydata).forEach(key => {
                    mergedObj[key] = mydata[key];
                });
                setMergedData(mergedObj);
                console.log(MergedData);
                let validpressure = [];
                mergedObj.forEach((value,index) => {
                    validpressure[index]= value[1];
                });
                let validtemp = [];
                mergedObj.forEach((value,index) => {
                    validtemp[index]= value[2]
                });
                let validdate = [];
                mergedObj.forEach((value,index) => {
                    validdate[index]= value[3]
                });
            }catch (error){
                console.log(error);
            }
        }
        validated_data(sensor);
    }, [sensor]);
    const worldElectricityProduction = [
        {
            country: "World",
            year: 2010,
            coal: 8358.6
        },
        {
            country: "World",
            year: 2011,
            coal: 8814.17
        },
        {
            country: "World",
            year: 2012,
            coal: 8855.83
        },
        {
            country: "World",
            year: 2013,
            coal: 9306.75
        },
        {
            country: "World",
            year: 2014,
            coal: 9495.57
        },
        {
            country: "World",
            year: 2015,
            coal: 9160.63
        },
        {
            country: "World",
            year: 2016,
            coal: 9226.85
        },
        {
            country: "World",
            year: 2017,
            coal: 9518.91
        },
        {
            country: "World",
            year: 2018,
            coal: 9899.44
        },
        {
            country: "World",
            year: 2019,
            coal: 9680.92
        },
        {
            country: "World",
            year: 2020,
            coal: 9292.9
        },
        {
            country: "World",
            year: 2021,
            coal: 10081.8
        },
        {
            year: 2022,
            coal: 10190.71
        }
    ];

    const keyToLabel = {
        pressure: "Pressure is "
    };

    const colors = {
        pressure: "black"
    };

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
                        dataKey: "hospital",
                    }
                ]}
                series={Object.keys(keyToLabel).map((key) => ({
                    dataKey: key,
                    label: keyToLabel[key],
                    color: colors[key],
                    showMark: true
                }))}
                dataset={MergedData}
                {...customize}
            />}
            </div>
    );
}

export default Sensors;