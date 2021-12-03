<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/suicidio_sexo.csv').then(dataset => {
            // dataset is an array of objects where each object has all columns:
            // {
            //   "a": "1",
            //   "b": "2",
            //   "c": "3"
            // }
            dataset.reverse();

            let labels = [];
            let dataF = [];
            let dataM = [];
            for (let d of dataset) {
                if (d.gender === 'Mulher') {
                    dataF.push(+d.count);
                    labels.push(d.period);
                } else {
                    dataM.push(+d.count);
                }
            }
            const avgF = Utils.movingAvg(dataF, 12);
            const avgM = Utils.movingAvg(dataM, 12);
            new Chart(id, {
                data: {
                    labels: labels,
                    datasets: [{
                        type: 'line',
                        label: 'Média Mulher',
                        backgroundColor: '#835CA2',
                        borderColor: '#835CA2',
                        borderWidth: 2,
                        data: avgF
                    }, {
                        type: 'line',
                        label: 'Média Homem',
                        backgroundColor: '#27955C',
                        borderColor: '#27955C',
                        borderWidth: 2,
                        data: avgM
                    }, {
                        type: 'line',
                        label: 'Mulher',
                        backgroundColor: '#9A5057',
                        borderColor: '#9A5057',
                        borderWidth: 2,
                        data: dataF,
                    }, {
                        type: 'line',
                        label: 'Homem',
                        backgroundColor: '#6781AB',
                        borderColor: '#6781AB',
                        borderWidth: 2,
                        data: dataM,
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

<style>

</style>

<div style="width: 100%; overflow-x: auto; overflow-y: hidden">
    <canvas {id} height="300" width="0"></canvas>
    <p class="chart-title">
        Suicídios por sexo, durante o período de 04/2016 a 04/2021
    </p>
</div>
