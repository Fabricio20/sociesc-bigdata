<script context="module">
    export const prerender = true;
</script>
<script>
    import ArticleHeader from "$lib/ArticleHeader.svelte";
    import ChartTotalSex from "$lib/charts/ChartTotalSex.svelte";
</script>

<ArticleHeader title="Homens vs Mulheres" hr="false"/>
<div class="article">
    <p>
        Existe alguma diferença entre homens e mulheres?
    </p>
    <ChartTotalSex/>
    <p>
        Quando falamos em causas de morte, é aparente que as principais causas são parecidas entre os grupos, tendo como
        <b>Infarto</b> o maior causador de mortes em homens (correspondente a <b>6.73%</b>) e o <b>Coronavirus</b>
        (correspondente a <b>5.91%</b>) seguido de infarto para as mulheres. Dentre esses grupos, destacam-se também a
        <b>Pneumonia</b>, <b>A.V.C.</b>, <b>Hipertensão</b> e <b>Diabetes</b>, presentes em abundância não importando
        qual o sexo.
    </p>
    <p>
        Para os homens, <b>Assassinato</b> e <b>Câncer de próstata</b> estão dentro das 10 maiores causas de morte,
        correspondentes a <b>2.29%</b> e <b>1.95%</b> respectivamente, enquanto para as mulheres o <b>Câncer de mama</b>
        e <b>Alzheimer</b> se destacam, com <b>2.56%</b> e <b>2.06%</b>.
    </p>
</div>
