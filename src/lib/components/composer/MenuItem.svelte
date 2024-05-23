<script>
    export let icon, title, action, isActive = null;
</script>

<button
    class="menu-item {isActive && isActive() ? 'is-active' : ''}"
    on:click={action}
    title={title}
>
    <span class="icon-[{icon}]"></span>
</button>