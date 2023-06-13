<script>
    import Col from '$lib/components/shared/Col.svelte';

    export let title;
</script>

<Col className="basis-1/4 max-w-[25%]">
    <div class="text-center">
        <h6 class="text-white mb-[15px] font-bold text-lg font-league leading-[1.4] m-0">{title}</h6>
        <ul class="my-0">
            <slot/>
        </ul>
    </div>
</Col>