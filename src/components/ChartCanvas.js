import React from "react";
import Chart from "chart.js"

import './ChartCanvas.css'

const colorPattern = [
    'rgb(103, 153, 213)',
    'rgb(217, 122, 73)',
    'rgb(79, 166, 124)',
    'rgb(219, 87, 124)',
    'rgb(140, 100, 201)',
    'rgb(75, 162, 178)',
    'rgb(83, 98, 235)',
    'rgb(176, 70, 154)',
    'rgb(113, 135, 146)',
    'rgb(222, 112, 108)',
    'rgb(60, 100, 147)',
];

const colorPattern_bg = [
    'rgba(103, 153, 213, .3)',
    'rgba(217, 122, 73, .3)',
    'rgba(79, 166, 124, .3)',
    'rgba(219, 87, 124, .3)',
    'rgba(140, 100, 201, .3)',
    'rgba(75, 162, 178, .3)',
    'rgba(83, 98, 235, .3)',
    'rgba(176, 70, 154, .3)',
    'rgba(113, 135, 146, .3)',
    'rgba(222, 112, 108, .3)',
    'rgba(60, 100, 147, .3)',
];

class ChartCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.runs = this.props.runs;
        console.log(this.runs);
    }

    componentDidMount() {
        this.updateChart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateChart();
    }

    updateChart() {
        if (this.chart) {
            this.chart.destroy();
        }

        let datasets = this.runs.map((run, index) => {
            let indices = [...Array(run['data']['x'].length).keys()];
            let data = indices.map(i => { return {
                x: run['data']['x'][i],
                y: run['data']['y'][i],
            } });

            return ({
                label: run['algo'],
                fill: false,
                data: data,
                borderColor: colorPattern[index],
                pointRadius: 0.8,
                pointBackgroundColor: colorPattern[index],
                borderWidth: 0.8,
                showLine: true
            });
        });

        // let datasets_up = this.runs.map((run, index) => {
        //     let indices = [...Array(run['data']['x'].length).keys()];
        //     let data = indices.map(i => { return {
        //         x: run['data']['x'][i],
        //         y: run['data']['y'][i]+20000,
        //     } });
        //
        //     return ({
        //         label: run['algo']+ 'up',
        //         fill: 0,
        //         data: data,
        //         borderColor: 'transparent',
        //         backgroundColor: colorPattern_bg[index],
        //         pointRadius: 0,
        //         showLine: true
        //     });
        // });
        //
        // datasets = datasets.concat(datasets_up);

        console.log(datasets);

        this.chart = new Chart(this.myCanvas, {
            type: 'scatter',
            data: {
                datasets: datasets
            },
            options: {
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: this.runs[0]['x_name']
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: this.runs[0]['y_name']
                        }
                    }],
                },
                tooltips: {
                    mode: 'label'
                },
                legend: {
                    onHover: function(e) {
                        e.target.style.cursor = 'pointer';
                    }
                },
                hover: {
                    onHover: function(e) {
                        var point = this.getElementAtEvent(e);
                        if (point.length) e.target.style.cursor = 'pointer';
                        else e.target.style.cursor = 'default';
                    }
                }
            }
        });
    }

    render() {
        return(
            <div className="canvas-section">
                <canvas ref={node =>{this.myCanvas=node}} id="canvas-chart" />
            </div>
        );
    }
}

export default ChartCanvas;
