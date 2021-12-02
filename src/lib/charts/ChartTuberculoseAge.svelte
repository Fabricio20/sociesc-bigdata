<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/tuberculose_idade.csv').then(dataset => {
            // dataset is an array of objects where each object has all columns:
            // {
            //   "a": "1",
            //   "b": "2",
            //   "c": "3"
            // }
            //dataset.reverse();
            const labels = dataset.map(function (d) {
                return d.group;
            });
            const data = dataset.map(function (d) {
                return +d.count;
            });
            const colors = dataset.map(function (d) {
                if (d.group === 'Criança') {
                    return '#5A697D';
                } else if (d.group === 'Adolescente') {
                    return '#279792';
                } else if (d.group === 'Adulto') {
                    return '#835CA2';
                } else if (d.group === 'Meia Idade') {
                    return '#9A5057'
                } else if (d.group === 'Idoso') {
                    return '#27955C';
                }
                return '#6781AB';
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
