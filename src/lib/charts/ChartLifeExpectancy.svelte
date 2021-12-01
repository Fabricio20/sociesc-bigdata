<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/expectativa.csv').then(dataset => {
            // dataset is an array of objects where each object has all columns:
            // {
            //   "a": "1",
            //   "b": "2",
            //   "c": "3"
            // }
            dataset.reverse();
            const dataM = [];
            const dataF = [];
            for (let d of dataset) {
                if (d.gender === 'F') {
                    dataF.push(+d.count);
                } else {
                    dataM.push(+d.count);
                }
            }
            const avgM = Utils.movingAvg(dataM, 0, 100);
            const avgF = Utils.movingAvg(dataF, 0, 100);
            new Chart(id, {
                data: {
                    labels: ['2016', '2017', '2018', '2019', '2020'],
                    datasets: [{
                        type: 'line',
                        label: 'Média Homem',
                        backgroundColor: '#5D78A4',
                        borderColor: '#5D78A4',
                        borderWidth: 2,
                        data: avgM
                    }, {
                        type: 'line',
                        label: 'Média Mulher',
                        backgroundColor: '#E1586E',
                        borderColor: '#E1586E',
                        borderWidth: 2,
                        data: avgF
                    }, {
                        type: 'bar',
                        label: 'Homem',
                        backgroundColor: '#6781AB',
                        borderColor: '#5A697D',
                        borderWidth: 0,
                        data: dataM,
                    }, {
                        type: 'bar',
                        label: 'Mulher',
                        backgroundColor: '#9A5057',
                        borderColor: '#5A697D',
                        borderWidth: 0,
                        data: dataF,
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
</div>
