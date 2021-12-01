<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/total_idade.csv').then(dataset => {
            // dataset is an array of objects where each object has all columns:
            // {
            //   "a": "1",
            //   "b": "2",
            //   "c": "3"
            // }
            const labels = dataset.map(function (d) {
                return d.age;
            });
            const data = dataset.map(function (d) {
                return +d.count;
            });
            new Chart(id, {
                data: {
                    labels: labels,
                    datasets: [{
                        type: 'line',
                        label: 'Mortes',
                        backgroundColor: '#5A697D',
                        borderColor: '#5A697D',
                        borderWidth: 1,
                        data: data,
                    }]
                },
                options: {
                    elements: {
                        point: {
                            radius: 1.5
                        }
                    },
                    showScaleValues: true,
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
