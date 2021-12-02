<script>
    import ArticleHeader from "$lib/ArticleHeader.svelte";
    import ChartSuicideOverTime from "$lib/charts/ChartSuicideOverTime.svelte";
    import ChartSuicideBySex from "$lib/charts/ChartSuicideBySex.svelte";
    import ChartSuicideSexXSex from "$lib/charts/ChartSuicideSexXSex.svelte";
    import ChartSuicideByAge from "$lib/charts/ChartSuicideByAge.svelte";
</script>

<ArticleHeader id="suicide" title="Saúde Mental"/>
<div class="article">
    <p>
        Recentemente, o tema de saúde mental veio a receber mais atenção, principalmente durante o isolamento causado
        pelas restrições da pandemia.
    </p>
    <ChartSuicideOverTime/>
    <p>
        Este primeiro gráfico detalha as mortes por suicídio em todo o Brasil durante o período de 5 anos começando em
        2016, e nos mostra que ao passar do tempo, <b>cada vêz mais pessoas estão tirando suas próprias vidas</b>. No
        entanto, no começo da pandemia, principalmente junto á maior cobertura da mídia sobre o tema de saúde mental,
        uma redução drástica é visivel nas taixas de suicídio.
    </p>
    <div class="wrapper">
        <div class="left">
            <ChartSuicideBySex/>
        </div>
        <div class="right">
            <ChartSuicideSexXSex/>
        </div>
    </div>
    <p>
        Quando analisamos por sexo, uma diferença fica extremamente clara, historicamente, homems cometem <b>3.71</b>
        vezes mais suicídio do que mulheres.
    </p>
    <ChartSuicideByAge/>
    <p>
        Se falarmos de idade, tanto homems quanto mulheres tendem a tirar suas vidas durante a <b>adolescencia</b>, fato
        que resulta nesta causa ser uma das maiores para o grupo de idade. Também é possivel notar que a medida que as
        pessoas envelhecem, menos escolhem o suicidio, tendo inicio o declínio aos <b>42</b> anos para homems e aos
        <b>51</b> para mulheres.
    </p>
</div>

<style>
    @media only screen
    and (min-device-width: 768px) {
        .wrapper {
            display: grid;
            grid-template-columns: 65% 1fr;
        }

        .left {
            grid-column: 1;
            overflow: hidden;
        }

        .right {
            grid-column: 2;
            overflow: hidden;
        }
    }
</style>
