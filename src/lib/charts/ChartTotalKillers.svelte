<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/total_cid10.csv').then(dataset => {
            // dataset is an array of objects where each object has all columns:
            // {
            //   "a": "1",
            //   "b": "2",
            //   "c": "3"
            // }
            //dataset.reverse();
            const labels = dataset.map(function (d) {
                return d.cid10;
            });
            const data = dataset.map(function (d) {
                return +d.count;
            });
            new Chart(id, {
                data: {
                    labels: labels,
                    datasets: [{
                        type: 'bar',
                        label: 'Mortes',
                        backgroundColor: [
                            '#5A697D',
                            '#279792',
                            '#835CA2',
                            '#9A5057',
                            '#27955C',
                            '#6781AB'
                        ],
                        borderColor: '#5A697D',
                        borderWidth: 0,
                        data: data,
                    }]
                },
            });
        });
    });
</script>

<style>

</style>

<div style="width: 100%; overflow-x: auto; overflow-y: hidden">
    <canvas {id} height="300" width="0"></canvas>
</div>
