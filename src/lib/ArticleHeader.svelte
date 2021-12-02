<script>
    export var title = '<Sem titulo>';
    export var hr = true;
    export var id = undefined;
</script>

{#if hr === true}
    <hr {id} class="divider">
{/if}
<div class="subtitle">
    <h2>{title}</h2>
</div>
