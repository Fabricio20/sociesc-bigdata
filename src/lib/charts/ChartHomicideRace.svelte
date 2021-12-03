<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/homicidio_raca.csv').then(dataset => {
            let total = 0;
            const labels = dataset.map(function (d) {
                total = total + (+d.count);
                return d.group;
            });
            const data = dataset.map(function (d) {
                return ((+d.count) * 100 / total);
            });
            new Chart(id, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        backgroundColor: [
                            '#9D5F30',
                            '#9A5057',
                            '#7A7576',
                            '#FE8003',
                            '#FFB503'
                        ],
                        borderColor: '#835CA2',
                        borderWidth: 0,
                        data: data,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        });
    });
</script>

<style>

</style>

<div style="width: 100%; overflow-x: auto; overflow-y: hidden;">
    <canvas {id} height="250" width="0"></canvas>
</div>
<p class="chart-title">
    Homicídios por raça, durante o período de 04/2016 a 04/2021
</p>
