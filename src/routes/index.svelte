<script context="module">
    export const prerender = true;
</script>

<script>
    import ArticleTotal from "$lib/articles/ArticleTotal.svelte";
    import ArticleTotalKillers from "$lib/articles/ArticleTotalKillers.svelte";
    import ArticleTotalAge from "$lib/articles/ArticleTotalAge.svelte";
    import ArticleTotalSex from "$lib/articles/ArticleTotalSex.svelte";
    import ArticleLifeExpectancy from "$lib/articles/ArticleLifeExpectancy.svelte";
    import ArticleDengue from "$lib/articles/ArticleDengue.svelte";
    import ArticleSuicide from "$lib/articles/ArticleSuicide.svelte";
    import ArticleHomicides from "$lib/articles/ArticleHomicides.svelte";
    import ArticleIntroduction from "$lib/articles/ArticleIntroduction.svelte";
    import ArticleTuberculose from "$lib/articles/ArticleTuberculose.svelte";
    import ArticleRenal from "$lib/articles/ArticleRenal.svelte";
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
        <ArticleTuberculose/>
        <ArticleRenal/>
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
