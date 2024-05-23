<script>
	export let logoDark, logoLight;
</script>

<div class="mr-auto">
	<a class="no-underline" href="/">
		<img
			src={logoDark}
			class="align-middle border-none h-auto max-h-[50px] max-w-full block dark:hidden"
			alt=""
		/>
		<img
			src={logoLight}
			class="align-middle border-none h-auto max-h-[50px] max-w-full hidden dark:block"
			alt=""
		/>
	</a>
</div>
