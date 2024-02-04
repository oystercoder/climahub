import React from 'react';
import Chart from 'react-apexcharts';

const BarGraphComponent = ({ data }) => {
    const options = {
        chart: {
            type: 'bar',
        },
        xaxis: {
            categories: data.map(item => item.datetimeStr),
        },
        colors: ['#AED6F1'], 
    };


    const series = [
        {
            name: 'Temperature',
            data: data.map(item => item.temp),
        },
    ];

    return (
        <div width="2000px" height="500px">
            <Chart
                options={options}
                series={series}
                type="bar"
                width="1000px"
                height="500px"
            />
        </div>
    );
};

export default BarGraphComponent;