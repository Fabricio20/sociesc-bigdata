<script>
    import {onMount} from 'svelte';
    import * as Utils from '../utils';

    let id = Utils.guid();

    onMount(async () => {
        const deathsM = 232473;
        const deathsF = 19999;
        const deathsT = deathsM + deathsF;

        new Chart(id, {
            type: 'pie',
            data: {
                labels: ['Homems', 'Mulheres'],
                datasets: [{
                    backgroundColor: [
                        '#6781AB',
                        '#9A5057'
                    ],
                    borderColor: '#835CA2',
                    borderWidth: 0,
                    data: [(deathsM * 100 / deathsT), (deathsF * 100 / deathsT)],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    });
</script>

<style>

</style>

<div style="width: 100%; overflow-x: auto; overflow-y: hidden;">
    <canvas {id} height="250" width="0"></canvas>
</div>
