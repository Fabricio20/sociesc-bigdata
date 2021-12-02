<script>
    import ArticleHeader from "$lib/ArticleHeader.svelte";
    import ChartDengueAge from "$lib/charts/ChartDengueAge.svelte";
    import ChartDengueOthers from "$lib/charts/ChartDengueOthers.svelte";
    import ChartDengueOverTime from "$lib/charts/ChartDengueOverTime.svelte";
</script>

<ArticleHeader title="Dengue"/>
<div class="article">
    <p>
        texto
    </p>
    Dengue
    <ChartDengueOverTime/>
    Dengue x Outras
    <ChartDengueOthers/>
    Dengue x Idade
    <ChartDengueAge/>
    <p>
        Segundo parágrafo se quiser
    </p>
</div>
