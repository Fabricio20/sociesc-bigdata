<script>
    import ArticleHeader from "$lib/ArticleHeader.svelte";
    import ChartTuberculoseOverTime from "$lib/charts/ChartTuberculoseOverTime.svelte";
    import ChartTuberculoseAge from "$lib/charts/ChartTuberculoseAge.svelte";
    import ChartTuberculoseSex from "$lib/charts/ChartTuberculoseSex.svelte";
</script>

<ArticleHeader id="tuberculose" title="Tuberculose"/>
<div class="article">
    <ChartTuberculoseAge/>
    <p>
        Neste gráfico, podemos perceber que a tuberculose em crianças e adolescentes é um número infinitesimal quando
        comparado aos mais velhos, não chega nem aos três dígitos, enquanto nos adultos passa de dez mil mortes
        confirmadas. Após os 20 anos, observa-se um declínio gradual, tendo mais enfase acimas dos 75, no qual as mortes
        por tuberculose cai em <b>%</b>.
    </p>
    <ChartTuberculoseSex/>
    <p>
        Quando comparamos as mortes por tuberculose em relação ao sexo, percebe-se dois fatos intrigantes, o primeiro, é
        que a tuberculose afeta os homens numa proporção absurdamente maior que as mulheres, chegando a <b>%</b> no pior
        caso em 2016, e o segundo, é que a variação de mortos por tuberculose desde 2017 ate 2020 é ínfima, menos de
        <b>1%</b>, o que nem seria levado em consideração se utilizarmos uma margem de erro.
    </p>
    <ChartTuberculoseOverTime/>
    <p>
        De início de 2017 ate o fim de 2019, percebemos que não houve uma grande variação nas mortes por tuberculose,
        mas de 2020 em diante, as mortes começam a aumentar de forma lenta, porem constante, atingindo uma diferença de
        <b>%</b> em fevereiro de 2021, já o mês de março, acaba fugindo totalmente da expectativo, sendo a menor taxa
        medida dentre estes 5 anos, apenas <b>%</b> se compararmos com março do ano anterior.
    </p>
</div>
