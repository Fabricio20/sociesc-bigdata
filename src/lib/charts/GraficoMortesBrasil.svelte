<script>
    import {onMount} from 'svelte';

    onMount(() => {

        function movingAvg(array, countBefore, countAfter) {
            if (countAfter === undefined) countAfter = 0;
            const result = [];
            for (let i = 0; i < array.length; i++) {
                const subArr = array.slice(Math.max(i - countBefore, 0), Math.min(i + countAfter + 1, array.length));
                const avg = subArr.reduce((a, b) => a + (isNaN(b) ? 0 : b), 0) / subArr.length;
                result.push(avg);
            }
            return result;
        }

        d3.csv('/datasets/total_brasil.csv').then(makeChart);

        function makeChart(dataset) {
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
            const average = movingAvg(data, 12);
            new Chart(document.getElementById('myChart').getContext('2d'), {
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
                    showScaleValues: true,
                    scales: {
                        xAxes: {
                            ticks: {
                                autoSkip: true
                            }
                        },
                        y: {
                            beginAtZero: false
                        }
                    },
                    plugins: {
                        zoom: {
                            zoom: {
                                wheel: {
                                    enabled: true,
                                },
                                pinch: {
                                    enabled: true
                                },
                                mode: 'x',
                            }
                        }
                    }
                }
            });
        }
    });
</script>

<style>

</style>

<div style="width: 100%; overflow-x: auto; overflow-y: hidden">
    <canvas id="myChart" height="300" width="0"></canvas>
</div>
