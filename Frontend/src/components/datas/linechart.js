import React, {useEffect, useState} from 'react';
import {ReadSensors} from "../../services/sensor-services";
import {useFetchSensors} from "../fetchs/fetchdata";
import { LineChart } from '@mui/x-charts/LineChart';
import dayjs from 'dayjs';


const CustomLinechart = ({Dataset, XAxis, Series}) => {




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
        margin: { top: 20 },
        stackingOrder: "descending"
    };
    return (
        <LineChart
            xAxis={[
                XAxis
            ]}
            // series={Object.keys(keyToLabel).map((key) => ({
            //     dataKey: key,
            //     label: keyToLabel[key],
            //     color: colors[key],
            //     showMark: true,
            //     yAxisKey: axis[key],
            // }))}
            series={[Series]}
            yAxis={[{ id: 'leftAxisId' }]}//, { id: 'rightAxisId' }]}
            // rightAxis="rightAxisId"
            dataset={Dataset}
            {...customize}
        />
    );
}

export default CustomLinechart;