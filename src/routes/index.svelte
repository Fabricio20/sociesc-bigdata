<script context="module">
    export const prerender = true;
</script>

<script>
    import MortesTotal from "$lib/articles/MortesTotal.svelte";
    import MortesIdade from "$lib/articles/MortesIdade.svelte";
</script>

<svelte:head>
    <title>Trabalho SOCIESC</title>
</svelte:head>

<section>
    <div class="header-container">
        <h1>Trabalho SOCIESC</h1>
    </div>
    <div class="wrapper">
        <MortesTotal/>
        <MortesIdade/>
    </div>
</section>

<style>
    .header-container {
        display: flex;
        justify-content: center;
    }

    .wrapper {
        margin-left: 10px;
    }
</style>
