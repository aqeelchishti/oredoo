<script>
    import { DarkMode } from 'flowbite-svelte';

    import Icon from '@iconify/svelte';

    export let iconLight, iconDark, iconClass, btnClass;
</script>

<DarkMode {btnClass}>
    <svelte:fragment slot="lightIcon">
        <Icon icon={iconLight} class={iconClass || ''} />
    </svelte:fragment>
    <svelte:fragment slot="darkIcon">
        <Icon icon={iconDark} class={iconClass || ''} />
    </svelte:fragment>
</DarkMode>