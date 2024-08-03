<script>
	import Title from '$lib/Title.svelte';
	import CtaButton from '$lib/CTAButton.svelte';
	import RegButton from '$lib/REGButton.svelte';
	import { onMount } from 'svelte';
	let list = [];

	function handleDel(id) {
		list = JSON.parse(sessionStorage.getItem('list')) || [];
		list = list.filter((item) => item.id !== id);
		sessionStorage.setItem('list', JSON.stringify(list));
	}

	function calcRecommendPath() {
		let list = JSON.parse(sessionStorage.getItem('list')) || [];
		if (list.length === 0) {
			alert('Your list is empty.');
		} else {
			alert('The recommended path is: ' + list.map((item) => item.displayName).join(' -> '));
		}
	}

	function checkWeather() {
		let list = JSON.parse(sessionStorage.getItem('list')) || [];
		if (list.length === 0) {
			alert('Your list is empty.');
		} else {
			alert(
				'The weather forecast for ' + list.map((item) => item.displayName).join(', ') + ' is sunny.'
			);
		}
	}

	onMount(() => {
		list = JSON.parse(sessionStorage.getItem('list')) || [];
		console.log(list);
	});
</script>

<Title>Destination List</Title>

<div class="max-w-prose space-y-8 mx-auto mb-24">
	{#if list.length === 0}
		<p>Your list is empty.</p>
	{:else}
		<h2>Items in your list</h2>
		<div class="flex flex-col gap-1">
			{#each list as item}
				<div class="flex place-content-between">
					<p>{item.displayName}</p>
					<button on:click={handleDel(item.id)}>Delete</button>
				</div>
			{/each}
		</div>
	{/if}

	<button on:click={calcRecommendPath}>
		<CtaButton>Calculate recommended path</CtaButton>
	</button>
	<button on:click={checkWeather}>
		<RegButton>Check weather forecast</RegButton>
	</button>
</div>
