<template>
    <div>
        <LineChart
                :width="500"
                :height="200"
                :labels="['', '1 день', '2 день', '3 день', '4 день', '5 день', '6 день', '7 день']"
                :datasets="displayedDatasets"
                :options="$options.options"
        />
    </div>
</template>

<script>
    import numeral from 'numeral';
    import LineChart from './LineChart';

    const datasets = {
        2018: {
            label: '',
            borderColor: 'rgb(112, 69, 196)',
            backgroundColor: 'rgba(142, 86, 233, 0.31)',
            pointHoverBackgroundColor: 'rgb(112, 69, 196)',
            borderWidth: 2,
            data: [NaN, 0, 10, 45, 60, 130, 180, 300],
        }
    };

    const options = {
        layout: {
            padding: {
                left: 20,
                right: 40,
                top: 10,
                bottom: 10
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: value => numeral(value).format('0,0'),
                    stepSize: 60
                },
            }]
        },
        tooltips: {
            mode: 'index',
            callbacks: {
                label(tooltipItem, data) {
                    const label = data.datasets[tooltipItem.datasetIndex].label;
                    const value = numeral(tooltipItem.yLabel).format('0,0');

                    return `${label}: ${value}`;
                }
            }
        }
    };


    export default {
        name: 'RandomChart',
        datasets,
        options,
        components: {
            LineChart
        },
        props: [
            'myInputModel'
        ],
        data() {
            return {
                selectedYears: [2018]
            };
        },
        computed: {
            displayedDatasets() {
                return this.selectedYears.map(year => datasets[year]);
            }
        }

    }
</script>
