<script context="module">
    export const prerender = true;
</script>

<script>
    import ArticleTotal from "$lib/articles/ArticleTotal.svelte";
    import ArticleTotalKillers from "$lib/articles/ArticleTotalKillers.svelte";
    import ArticleTotalAge from "$lib/articles/ArticleTotalAge.svelte";
    import ArticleTotalSex from "$lib/articles/ArticleTotalSex.svelte";
    import ArticleLifeExpectancy from "$lib/articles/ArticleLifeExpectancy.svelte";
    import ChartTuberculoseOverTime from "$lib/charts/ChartTuberculoseOverTime.svelte";
    import ChartTuberculoseAge from "$lib/charts/ChartTuberculoseAge.svelte";
    import ChartTuberculoseSex from "$lib/charts/ChartTuberculoseSex.svelte";
    import ChartRenalOverTime from "$lib/charts/ChartRenalOverTime.svelte";
    import ChartRenalAge from "$lib/charts/ChartRenalAge.svelte";
    import ChartRenalSex from "$lib/charts/ChartRenalSex.svelte";
    import ArticleDengue from "$lib/articles/ArticleDengue.svelte";
    import ArticleSuicide from "$lib/articles/ArticleSuicide.svelte";
    import ArticleHomicides from "$lib/articles/ArticleHomicides.svelte";
    import ArticleIntroduction from "$lib/articles/ArticleIntroduction.svelte";
</script>

<svelte:head>
    <title>Mortalidade no Brasil</title>
</svelte:head>

<section id="home">
    <div class="header-container">
        <h1>Mortalidade no Brasil</h1>
    </div>
    <div class="wrapper">
        <ArticleIntroduction/>
        <ArticleTotal/>
        <ArticleTotalKillers/>
        <ArticleTotalAge/>
        <ArticleTotalSex/>
        <ArticleLifeExpectancy/>
        <ArticleSuicide/>
        <ArticleHomicides/>

        <ArticleDengue/>

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
    </div>
</section>

<style>
    .header-container {
        margin-top: 48px;
        display: flex;
        justify-content: center;
    }

    .wrapper {
        margin-left: 10px;
    }
</style>
