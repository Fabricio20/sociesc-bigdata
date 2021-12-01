<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/total_sexo.csv').then(dataset => {
            // dataset is an array of objects where each object has all columns:
            // {
            //   "a": "1",
            //   "b": "2",
            //   "c": "3"
            // }
            const labels = dataset.map(function (d) {
                return [d.gender, d.cid10];
            });
            const data = dataset.map(function (d) {
                return +d.count;
            });
            const colors = dataset.map(function (d) {
                if (d.gender === 'Homem') {
                    return '#6781AB';
                } else if (d.gender === 'Mulher') {
                    return '#9A5057';
                }
                return '#5A697D';
            });
            new Chart(id, {
                data: {
                    labels: labels,
                    datasets: [{
                        grouped: false,
                        type: 'bar',
                        label: 'Mortes',
                        backgroundColor: colors,
                        borderColor: '#5A697D',
                        borderWidth: 0,
                        data: data
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
