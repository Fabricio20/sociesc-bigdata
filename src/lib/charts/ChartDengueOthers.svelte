<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/dengue_outras.csv').then(dataset => {
            // dataset is an array of objects where each object has all columns:
            // {
            //   "a": "1",
            //   "b": "2",
            //   "c": "3"
            // }
            dataset.reverse();
            const dataD = [];
            const dataC = [];
            for (let d of dataset) {
                if (d.name === 'Dengue') {
                    dataD.push(+d.count);
                } else {
                    dataC.push(+d.count);
                }
            }
            const avgD = Utils.movingAvg(dataD, 1);
            const avgC = Utils.movingAvg(dataC, 1);
            new Chart(id, {
                data: {
                    labels: ['2016', '2017', '2018', '2019', '2020'],
                    datasets: [{
                        type: 'line',
                        label: 'Média Dengue',
                        backgroundColor: '#27955C',
                        borderColor: '#27955C',
                        borderWidth: 2,
                        data: avgD
                    }, {
                        type: 'line',
                        label: 'Média Chikungunya',
                        backgroundColor: '#835CA2',
                        borderColor: '#835CA2',
                        borderWidth: 2,
                        data: avgC
                    }, {
                        type: 'bar',
                        label: 'Dengue',
                        backgroundColor: '#27955C',
                        borderColor: '#27955C',
                        borderWidth: 0,
                        data: dataD,
                    }, {
                        type: 'bar',
                        label: 'Chikungunya',
                        backgroundColor: '#835CA2',
                        borderColor: '#835CA2',
                        borderWidth: 0,
                        data: dataC,
                    }]
                },
                options: {
                    elements: {
                        point: {
                            radius: 1.5
                        }
                    },
                    scales: Utils.scales,
                    plugins: Utils.plugins
                }
            });
        });
    });
</script>

<div style="width: 100%; overflow-x: auto; overflow-y: hidden">
    <canvas {id} height="300" width="0"></canvas>
    <p class="chart-title">
        Mortes por doenças do mosquito Aedes Aegypti, durante o período de 01/2016 a 12/2020
    </p>
</div>
