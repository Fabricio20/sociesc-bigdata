<script context="module">
    export const prerender = true;
</script>
<script>
    import ArticleHeader from "$lib/ArticleHeader.svelte";
    import ChartRenalOverTime from "$lib/charts/ChartRenalOverTime.svelte";
    import ChartRenalAge from "$lib/charts/ChartRenalAge.svelte";
    import ChartRenalSex from "$lib/charts/ChartRenalSex.svelte";
</script>

<ArticleHeader id="renal" title="Doenças Renais"/>
<div class="article">
    <ChartRenalOverTime/>
    <p>
        Como é possível verificar no gráfico acima, existe um pico em mortes por doenças renais em 2020 agravando-se em
        2021. Um dos motivos que podem indicar nessa diferença significativa de mortes é a pandemia, com a contração do
        vírus do COVID-19 muitos pacientes precisaram de tratamento médico intensivo em UTI, e cerca de 30% desses
        pacientes precisam realizar hemodiálise por conta de o corpo dos mesmos não suportar o acúmulo de líquido no
        organismo. Esse procedimento, no entanto, pode causar insuficiência e outras doenças renais.
    </p>
    <ChartRenalAge/>
    <p>
        Existe uma relação direta entre o envelhecimento, e doenças renais. Segundo a Sociedade brasileira de
        Nefrologia, a insuficiência renal pode atingir de 30% a 50% das pessoas com mais de 65 anos, isso por que ao
        envelhecer, o corpo reduz o ritmo da filtração glomerular. Portanto, é necessário ter cuidado extra com os rins
        após os 45 anos de idade, tendo uma alimentação saudável e realizar exames de rotina.
    </p>
    <ChartRenalSex/>
    <p>
        Doenças e problemas renais são mais propícios em mulheres do que em homens, isso se dá por diversos fatores,
        dentre eles a uretra, que nas mulheres é menor e mais próxima do ânus, facilitando a produção de bactérias.
        Ironicamente, mesmo as mulheres sendo biologicamente mais propícias a contrair doenças renais, é possível ver
        que os homens são os que mais falecem por este problema.
    </p>
</div>
