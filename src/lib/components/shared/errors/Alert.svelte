<script>
	import Icon from '@iconify/svelte';

	export let className,
		icon,
		text,
		iconClass = '';
</script>

<div class="alert text-sm rounded-none p-2 mb-4 {className || ''}">
	<Icon {icon} class="stroke-current shrink-0 h-6 w-6 {iconClass || ''}" />
	<span class="text-sm">{text}</span>
</div>
