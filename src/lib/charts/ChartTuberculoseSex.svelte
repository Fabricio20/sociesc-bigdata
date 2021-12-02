<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/tuberculose_sexo.csv').then(dataset => {
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
                if (d.gender === 'Homem') {
                    dataM.push(+d.count);
                } else {
                    dataF.push(+d.count);
                }
            }
            const avgM = Utils.movingAvg(dataM, 0, 100);
            const avgF = Utils.movingAvg(dataF, 0, 100);
            console.log(dataM);
            new Chart(id, {
                data: {
                    labels: ['2016', '2017', '2018', '2019', '2020'],
                    datasets: [{
                        type: 'line',
                        label: 'Média Homem',
                        backgroundColor: '#27955C',
                        borderColor: '#27955C',
                        borderWidth: 2,
                        data: avgM
                    }, {
                        type: 'line',
                        label: 'Média Mulher',
                        backgroundColor: '#835CA2',
                        borderColor: '#835CA2',
                        borderWidth: 2,
                        data: avgF
                    }, {
                        type: 'bar',
                        label: 'Homem',
                        backgroundColor: '#27955C',
                        borderColor: '#27955C',
                        borderWidth: 0,
                        data: dataM,
                    }, {
                        type: 'bar',
                        label: 'Mulher',
                        backgroundColor: '#835CA2',
                        borderColor: '#835CA2',
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
