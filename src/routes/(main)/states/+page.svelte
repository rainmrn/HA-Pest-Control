<script>
	import Title from '$lib/Title.svelte';
	import REGButton from '$lib/REGButton.svelte';
	import { state } from '$lib/states.json';
</script>

<Title>Which state are you interested in?</Title>

<div class="max-w-prose space-y-8 mx-auto mb-24">
	<p>Select a state to view its attractions.</p>
	<ul class="list-none">
		{#each state as s}
		<a href="/states/{s.slug}">
			<REGButton>{s.name}</REGButton>
		</a>
		{/each}
		
	</ul>
</div>
