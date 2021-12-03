<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/suicidio_idade.csv').then(dataset => {
            // dataset is an array of objects where each object has all columns:
            // {
            //   "a": "1",
            //   "b": "2",
            //   "c": "3"
            // }
            const labels = [];
            for (let i = 10; i < 96; i++) {
                labels.push(i);
            }
            const dataM = [];
            const dataF = [];
            for (let d of dataset) {
                if (d.gender === 'Homem') {
                    dataM.push(+d.count);
                } else {
                    dataF.push(+d.count);
                }
            }
            new Chart(id, {
                data: {
                    labels: labels,
                    datasets: [{
                        type: 'line',
                        label: 'Homem',
                        backgroundColor: '#6781AB',
                        borderColor: '#6781AB',
                        borderWidth: 1,
                        data: dataM,
                    }, {
                        type: 'line',
                        label: 'Mulher',
                        backgroundColor: '#9A5057',
                        borderColor: '#9A5057',
                        borderWidth: 1,
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
                    plugins: Utils.plugins,
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
        Suicídios por idade, durante o período de 04/2016 a 04/2021
    </p>
</div>
