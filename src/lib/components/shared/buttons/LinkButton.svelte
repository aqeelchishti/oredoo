<script>
    export let title, link, btnClass;
</script>

<a href={link} class="{btnClass || ''}">{title}</a>