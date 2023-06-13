<script>
    import Icon from '@iconify/svelte';
    
    export let icon, iconClass;
</script>

<Icon icon={icon} class={iconClass || ''}/>