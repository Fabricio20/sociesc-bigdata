<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/dengue_idade.csv').then(dataset => {
            // dataset is an array of objects where each object has all columns:
            // {
            //   "a": "1",
            //   "b": "2",
            //   "c": "3"
            // }
            //dataset.reverse();
            const datasets_data = dataset.map(function (d) {
                var color;
                if (d.group === 'Criança') {
                    color = '#5A697D';
                } else if (d.group === 'Adolescente') {
                    color = '#279792';
                } else if (d.group === 'Adulto') {
                    color = '#835CA2';
                } else if (d.group === 'Meia Idade') {
                    color = '#9A5057'
                } else if (d.group === 'Idoso') {
                    color = '#27955C';
                } else if (d.group === 'Ancião') {
                    color = '#6781ab';
                }
                return {
                    type: 'bar',
                    label:  d.group,
                    backgroundColor: color,
                    borderColor: '#5A697D',
                    borderWidth: 2,
                    data: [d.count]
                }
            });
            new Chart(id, {
                data: {
                    labels: ['Morte de Dengue por grupo de idade durante o periodo de 04/2016 a 04/2021'],
                    datasets: datasets_data
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
