<script context="module">
    export const prerender = true;
</script>
<script>
    import ArticleHeader from "$lib/ArticleHeader.svelte";
    import ChartHomicideOverTime from "$lib/charts/ChartHomicideOverTime.svelte";
    import ChartHomicideSexXSex from "$lib/charts/ChartHomicideSexXSex.svelte";
    import ChartHomicideCauses from "$lib/charts/ChartHomicideCauses.svelte";
    import ChartHomicideRace from "$lib/charts/ChartHomicideRace.svelte";
</script>

<ArticleHeader id="homicide" title="Homicídios"/>
<div class="article">
    <ChartHomicideOverTime/>
    <p>
        De acordo a <a href="https://www.unodc.org/lpo-brazil/pt/sobre-unodc/index.html">UNODC</a>, o Brasil é o 27°
        país com maior taxa de homicídios do mundo. Tendo em torno de <b>25.62</b> mortes por 100 mil habitantes em
        2018, valor que entrou em queda no início de 2018 e ao passar do tempo está cada vez mais baixo, sendo
        <b>19.95</b> em 2020.
    </p>
    <ChartHomicideSexXSex/>
    <p>
        Já por sexo, homens tem <b>11.62</b> vezes mais chance de serem assassinados do que mulheres, correspondendo
        a <b>92%</b> de todos os assassinatos no país.
    </p>
    <ChartHomicideCauses/>
    <p>
        Quando falamos de causas de morte, predominantemente mortes por arma de fogo são a maior causa tanto para
        homens quanto para mulheres, e com <b>37.15%</b> de todas ocorrendo na rua. No entanto, para mulheres,
        assassinatos em domicílio correspondem a <b>21.43%</b> contra <b>6.87%</b> para homens.
    </p>
    <ChartHomicideRace/>
    <p>
        Observando por raça, os pardos ou mistos correspondem a <b>69.42%</b> das mortes, seguidos dos brancos com
        <b>22.11%</b> e negros com <b>7.9%</b>. Já a população indígena corresponde a menos de <b>0.5%</b> dos
        assassinatos.
    </p>
</div>
