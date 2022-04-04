import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])

    return (

        <LineChart width={600} height={400} data={chartData}>
            <Line dataKey={'sell'}></Line>
            <XAxis dataKey={'month'}></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>

        </LineChart>

    );
};

export default DashBoard;