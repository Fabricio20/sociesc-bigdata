<script>
    import ArticleHeader from "$lib/ArticleHeader.svelte";
    import ChartLifeExpectancy from "$lib/charts/ChartLifeExpectancy.svelte";
</script>

<ArticleHeader id="expectancy" title="Expectativa de Vida"/>
<div class="article">
    <p>
        E com esses dados, podemos estimar a expectativa de vida.
    </p>
    <ChartLifeExpectancy/>
    <p>
        Desde 2016 a expectativa de vida vem <b>crescendo</b>, tendo apenas uma pequena redução em 2020 para as
        mulheres, fato que pode ser ligado com a maior taixa de mortalidade entre mulheres pelo <b>COVID-19</b>.
    </p>
    <p>
        Para os homems, a expectativa ainda fica atráz das mulheres por <b>11.27%</b> na média (em torno de <b>8 anos de
        diferença</b>), mas nos últimos cinco anos a expectativa de vida cresceu em média <b>0.63%</b> ao ano.
    </p>
    <p>
        Já para as mulheres, a expectativa de vida sobe com um rítimo de <b>0.17%</b> ao ano, tendo tido apenas uma
        diminuição em 2020.
    </p>
</div>
