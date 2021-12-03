<script>
    import ArticleHeader from "$lib/ArticleHeader.svelte";
    import ChartDengueAge from "$lib/charts/ChartDengueAge.svelte";
    import ChartDengueOthers from "$lib/charts/ChartDengueOthers.svelte";
    import ChartDengueOverTime from "$lib/charts/ChartDengueOverTime.svelte";
</script>

<ArticleHeader title="Dengue"/>
<div class="article">
    <p>
        As doenças transmitidas pelo Aedes Aegypti, chamadas de arboviroses, têm se constituído um dos principais
        problemas de saúde pública no mundo, sendo a dengue de maior relevância no brasil, os numeros de casos de obitos
        são preocupantes temos o ano de <strong>2019</strong> o maior índice de óbitos pela doença que ocorreram nos
        últimos 5 anos com <strong>1.048 mortes</strong> tendo uma diferença de <strong>15%</strong> do segundo maior
        índice que é <strong>2020</strong> com <strong>891</strong> e o terceiro ano <strong>2016</strong> com
        <strong>473</strong>. <i>O mês com mais mortes de dengue foi <strong>maio de 2019</strong>.</i>
    </p>
    <p>
        O Gráfico abaixo corresponde ao número de óbitos de dengue (localizado
        na lateral esquerda do gráfico) por tempo entre 04/2016 a 04/2021:
    </p>
    <ChartDengueOverTime/>
    <p>
        Todas as pessoas podem contrair dengue, mas os <strong>idosos</strong> têm até <strong>12 vezes</strong>
        mais risco de morrer por dengue do que as pessoas de outras faixas etárias, segundo o Ministério da Saúde.
        Por este motivo, a dengue em pessoas com <strong>idade superior a 60 anos</strong> é muito mais perigosa e
        representam <strong>52%</strong> dos casos
        de óbitos de dengue no total sobre o período de <strong>5 anos</strong>:
    </p>
    <p>
        O Gráfico abaixo corresponde ao número de óbitos de dengue (localizado na lateral esquerda do gráfico)
        agrupado por diferente grupo de faixa etária entre <strong>04/2016 a 04/2021</strong>,
        consulte a legenda para entender sobre o grupo de faixa etária.
    </p>
    <h6 id="caption_chart"
        style="border-color: #000; border: solid; border-width: 2px; width: 40%; float: right; font-size: 15px;">
        Legenda sobre os valores de idade nos grupos:
        <div style="display: flex; flex-direction: row; flex-wrap: nowrap; align-content: center; justify-content: flex-start; align-items: center; gap: 40px;">
            <div style="color: #5A697D;">Criança:</div>
            0-12
            <br/>
        </div>
        <div style="display: flex; flex-direction: row; flex-wrap: nowrap; align-content: center; justify-content: flex-start; align-items: center; gap: 5px;">
            <div style="color: #279792;">Adolescente:</div>
            12-18
            <br/>
        </div>
        <div style="display: flex; flex-direction: row; flex-wrap: nowrap; align-content: center; justify-content: flex-start; align-items: center; gap: 47px">
            <div style="color: #835CA2;">Adulto:</div>
            19-45
            <br/>
        </div>
        <div style="display: flex; flex-direction: row; flex-wrap: nowrap; align-content: center; justify-content: flex-start; align-items: center; gap: 17px;">
            <div style="color: #9A5057;">Meia-idade:</div>
            45-59
            <br/>
        </div>
        <div style="display: flex; flex-direction: row; flex-wrap: nowrap; align-content: center; justify-content: flex-start; align-items: center; gap: 55px;">
            <div style="color: #27955C;">Idoso:</div>
            60-74
            <br/>
        </div>
        <div style="display: flex; flex-direction: row; flex-wrap: nowrap; align-content: center; justify-content: flex-start; align-items: center; gap: 45px;">
            <div style="color: #6781ab;">Ancião:</div>
            75-90
        </div>
    </h6>
    <ChartDengueAge/>
    <p>
        A soma de mortes por dengue e chikungunya no Brasil em de <strong>abril de 2016</strong>, até <strong>abril de
        2021</strong>,
        chegou a <strong>4.575</strong> no total, <strong>3.510</strong> por dengue e <strong>1.065</strong> por
        chikungunya.
        O ano com maior índice de morte por dengue foi <strong>2017</strong> com <strong>1048</strong>
        óbitos e o ano com maior índice de morte por chikungunya foi <strong>2020</strong> com <strong>442</strong>
        óbitos.
        <b><i>No ano de 2021 os dados de morte por dengue e chikungunya foram ignorados devido a fragilidade dos dados
            coletados.</i></b>
    </p>
    <p>
        O Gráfico abaixo corresponde ao número de óbitos de <strong>Dengue x Chikungunya</strong> por tempo entre
        04/2016 a 04/2021 tendo um período de <strong>5</strong> anos:
    </p>
    <ChartDengueOthers/>
</div>

<style>
    @media (max-width: 500px) {
        #caption_chart {
            width: 100% !important;
        }
    }
</style>
