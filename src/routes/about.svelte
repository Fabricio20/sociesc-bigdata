<script context="module">
    import {browser, dev} from '$app/env';

    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;

    // since there's no dynamic data here, we can prerender
    // it so that it gets served as a static asset in prod
    export const prerender = true;
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<div class="content">
    <h1>Sobre</h1>

    <p>
        Esta experiência interativa foi desenvolvida pelo grupo <b>7</b> para a matéria de <b>Análise de dados e Big
        Data</b>. Integrantes:
    </p>
    <ul>
        <li>Fabricio Winter</li>
        <li>Felipe Schneider</li>
        <li>Fernando Krueger</li>
        <li>Leandro Custodio</li>
        <li>Victor Wolff</li>
    </ul>
    <p>
        Todos os dados foram obtidos atravéz de análise das taxas de morte durante o período de 5 anos entre 2016-04 e
        2021-04, disponibilizados pelo
        <a href="https://dados.gov.br/dataset/sistema-de-informacao-sobre-mortalidade">
            <b>SIM (Sistema de Informação sobre Mortalidade)</b>
        </a> do <b>DataSus</b>.
    </p>

</div>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
