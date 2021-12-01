<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/total_brasil.csv').then(dataset => {
            // dataset is an array of objects where each object has all columns:
            // {
            //   "a": "1",
            //   "b": "2",
            //   "c": "3"
            // }
            dataset.reverse();
            const labels = dataset.map(function (d) {
                return d.period;
            });
            const data = dataset.map(function (d) {
                return +d.count;
            });
            const average = Utils.movingAvg(data, 12);
            new Chart(id, {
                data: {
                    labels: labels,
                    datasets: [{
                        type: 'line',
                        label: 'Media Anual',
                        backgroundColor: '#BD542D',
                        borderColor: '#BD542D',
                        borderWidth: 2,
                        data: average
                    }, {
                        type: 'bar',
                        label: 'Mortes',
                        backgroundColor: '#5A697D',
                        borderColor: '#5A697D',
                        borderWidth: 0,
                        data: data,
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
</div>
