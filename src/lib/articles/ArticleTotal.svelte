<script>
    import ArticleHeader from "$lib/ArticleHeader.svelte";
    import ChartTotalDeaths from "$lib/charts/ChartTotalDeaths.svelte";
</script>

<ArticleHeader title="No Total"/>
<div class="article">
    <p>
        Mas então, após tantos transtornos causados no setor da saúde, como estão os números no geral?
    </p>
    <ChartTotalDeaths/>
    <p>
        Nos primeiros meses de 2020, estávamos na normalidade. De acordo com o ministério da saúde, o primeiro
        caso de COVID-19 no país foi identificado no dia <b>26/02/2020</b>, no entanto, só iriamos perceber
        seus efeitos no mês seguinte, com um aumento inicial de <b>9.86%</b> em relação aos anos de 2018 e 2019.
    </p>
    <p>
        Esta situação só veio a piorar com o passar do tempo, atingindo um pico de <b>32.14%</b> em relação aos anos
        anteriores em 2020 e quebrando récordes em 2021, tendo até o momento registrado um pico de <b>78.02%</b> mais
        mortes no mês de março.
    </p>
    <p>
        No total, 2020 viu um aumento de <b>17.17%</b> a mais de mortes em relação ao ano de 2019, com 2021 registrando
        um aumento de <b>33.15%</b> em relação ao mesmo período de 2020.
    </p>
</div>
