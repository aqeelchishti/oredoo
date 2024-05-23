<script>
	import Container from '$lib/components/shared/Container.svelte';
	import Row from '$lib/components/shared/Row.svelte';
	import Col from '$lib/components/shared/Col.svelte';

	import PostCard from '$lib/components/posts/PostCard.svelte';
	
	export let posts;
</script>

<Row>
	<Col className="basis-full max-w-full">
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</Col>
</Row>
