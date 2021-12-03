<script>
    import ArticleHeader from "$lib/ArticleHeader.svelte";
    import ChartTotalKillers from "$lib/charts/ChartTotalKillers.svelte";
</script>

<ArticleHeader title="O que mais mata?" hr="false"/>
<div class="article">
    <p>
        Nos distanciando um pouco da pandemia, o que mais mata no Brasil?
    </p>
    <ChartTotalKillers/>
    <p>
        No Brasil, a causa mais comum de morte é o <b>infarto</b> (<i>Infarto agudo do miocárdio</i>), responsável por
        <b>6.35%</b> das mortes entre 2016 e 2021, seguido da COVID-19, que corresponde a <b>5.94%</b> das mortes.
    </p>
    <p>
        Já em terceiro lugar, com <b>3.52%</b> das mortes atribuídas, a classificação se apresenta como desconhecida, no
        entanto, após a mesma, fatores como <b>Pneumonia</b>, <b>A.V.C.</b> e <b>Câncer</b> aparecem.
    </p>
</div>
