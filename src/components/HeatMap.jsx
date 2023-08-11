import { Chart } from 'react-google-charts';
import { stateData } from '@/heatMapData';
import { Inter } from 'next/font/google';

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

export default function HeatMap() {

    return (

        <>
            <Chart chartType="GeoChart" data={stateData} options={options}></Chart>
        </>

    )

};