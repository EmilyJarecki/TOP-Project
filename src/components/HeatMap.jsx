'use client'
import PositivesCounter from './PositivesCounter';
import { useState } from 'react';
import { Chart } from 'react-google-charts';
import { stateData } from '@/heatMapData';
import { Inter } from 'next/font/google';

let stateDataCount = 0;

const options = {
    region: 'US',
    displayMode: 'regions',
    height: 200,
    width: 350,
    resolution: 'provinces',
    legend: 'none',
    colorAxis: { colors: ['#DCE0EB', '#385FA4', '#243C6C'] },
    tooltip: { textStyle: { fontName: 'Inter', bold: false } }
};


async function countAllPositives() {

    for (let i = 1; i < stateData.length; i++) {

        stateDataCount = stateDataCount + stateData[i][1]

    };

}

export default function HeatMap() {

    const [positivesCount, setPositivesCount] = useState(stateDataCount);

    return (

        <>
            <PositivesCounter count={stateDataCount}></PositivesCounter>
            <div className="pl-10">
                <Chart chartType="GeoChart" data={stateData} options={options}></Chart>
            </div>
        </>

    )

};