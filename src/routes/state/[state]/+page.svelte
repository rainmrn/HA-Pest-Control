<script>
	import Title from '$lib/Title.svelte';
	export let data;
</script>

<Title>
	{data.state.name}
</Title>

<img src={data.state.image} alt="" class="w-1/2 mx-auto rounded-lg mb-12">

<div class="max-w-prose space-y-8 mx-auto mb-24">
	<p>{data.state.description}</p>
	<h2>List of attractions</h2>
</div>


