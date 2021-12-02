<script context="module">
    export const prerender = true;
</script>

<script>
    import MortesTotal from "$lib/articles/MortesTotal.svelte";
    import MortesIdade from "$lib/articles/MortesIdade.svelte";
    import ArticleCovid from "$lib/articles/ArticleCovid.svelte";
    import ArticleTotal from "$lib/articles/ArticleTotal.svelte";
    import ArticleTotalKillers from "$lib/articles/ArticleTotalKillers.svelte";
    import ArticleTotalAge from "$lib/articles/ArticleTotalAge.svelte";
    import ArticleTotalSex from "$lib/articles/ArticleTotalSex.svelte";
    import ArticleLifeExpectancy from "$lib/articles/ArticleLifeExpectancy.svelte";
    import ChartDengueOverTime from "$lib/charts/ChartDengueOverTime.svelte";
    import ChartDengueOthers from "$lib/charts/ChartDengueOthers.svelte";
    import ChartDengueAge from "$lib/charts/ChartDengueAge.svelte";
    import ChartTuberculoseOverTime from "$lib/charts/ChartTuberculoseOverTime.svelte";
    import ChartTuberculoseAge from "$lib/charts/ChartTuberculoseAge.svelte";
    import ChartTuberculoseSex from "$lib/charts/ChartTuberculoseSex.svelte";
    import ChartRenalOverTime from "$lib/charts/ChartRenalOverTime.svelte";
    import ChartRenalAge from "$lib/charts/ChartRenalAge.svelte";
    import ChartRenalSex from "$lib/charts/ChartRenalSex.svelte";
</script>

<svelte:head>
    <title>Mortalidade no Brasil</title>
</svelte:head>

<section>
    <div class="header-container">
        <h1>Mortalidade no Brasil</h1>
    </div>
    <div class="wrapper">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
        <ArticleCovid/>
        <ArticleTotal/>
        <ArticleTotalKillers/>
        <ArticleTotalAge/>
        <ArticleTotalSex/>
        <ArticleLifeExpectancy/>

        <hr/>
        Dengue
        <ChartDengueOverTime/>
        Dengue x Outras
        <ChartDengueOthers/>
        Dengue x Idade
        <ChartDengueAge/>

        <hr/>
        Tuberculose Over Time
        <ChartTuberculoseOverTime/>
        Tuberculose x Idade
        <ChartTuberculoseAge/>
        Tuberculose x Sexo
        <ChartTuberculoseSex/>
        <hr/>
        Renal Over Time
        <ChartRenalOverTime/>
        Renal x Idade
        <ChartRenalAge/>
        Renal x Sexo
        <ChartRenalSex/>

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
