<script>
    import {onMount} from 'svelte';
    import * as Utils from './utils.js';

    let id = Utils.guid();

    onMount(async () => {
        d3.csv('/datasets/ponderada.csv').then(dataset => {
            // dataset is an array of objects where each object has all columns:
            // {
            //   "a": "1",
            //   "b": "2",
            //   "c": "3"
            // }
            dataset.reverse();

            let p = 0;
            let c = 0;
            for (let d of dataset) {
                p = p + (+d.count);
                c = c + (d.age * (+d.count));
            }
            console.log(c);
            console.log(p);
            console.log(c / p);
        });
    });
</script>

<style>

</style>

<div style="width: 100%; overflow-x: auto; overflow-y: hidden">
    <canvas {id} height="300" width="0"></canvas>
</div>
