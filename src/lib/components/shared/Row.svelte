<script>
    export let className='';
</script>

<div class="flex flex-wrap -mx-[15px] {className || ''}">
    <slot/>
</div>