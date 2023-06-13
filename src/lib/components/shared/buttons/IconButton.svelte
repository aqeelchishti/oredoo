<script>
    import Icon from '@iconify/svelte';
    
    export let icon, btnClass, iconClass;
</script>

<button on:click class="{btnClass || ''}">
    <Icon icon={icon} class={iconClass || ''}/>
</button>