<script>
	import Title from '$lib/Title.svelte';
	import { findAttractions } from '$lib/utils.js';
	import { onMount } from 'svelte';

	let places = [];
	let error = null;

	async function fetchAttractions() {
		try {
			places = await findAttractions(data.state.name);
			error = null;
		} catch (err) {
			error = err;
		}
	}

	function handleAddTolist(place) {
		let list = JSON.parse(sessionStorage.getItem('list')) || [];
		let alreadyExists = list.find((e) => e.id === place.id);
		if (alreadyExists) {
			window.alert('This place is already in your list.');
		} else {
			list.push(place);
			sessionStorage.setItem('list', JSON.stringify(list));
			window.alert('Place added to list.');
		}
		console.log(sessionStorage.getItem('list'));
	}

	// Fetch data on mount
	onMount(fetchAttractions);

	// Reactive statement to watch for parameter changes
	$: if (data.state.name) {
		fetchAttractions();
	}

	export let data;
</script>

<Title>
	{data.state.name}
</Title>

<div class="max-w-prose space-y-8 mx-auto mb-24">
	<p>{data.state.description}</p>
	<img src={data.state.image} alt="" class=" mx-auto rounded-lg mb-12" />
	<h2>List of attractions</h2>
	<div class="flex flex-col gap-1">
		{#await places}
			<p>Loading...</p>
		{:then places}
			{#each places as place}
				<button
					class="flex items-center gap-4 hover:bg-black hover:text-white duration-50 ease-in-out rounded-sm cursor-pointer p-4"
					on:click={handleAddTolist(place)}
				>
					<img
						src={place.photos[0].getURI({ maxHeight: 200 })}
						class="w-[160px] h-[100px] object-cover rounded-sm"
						alt=""
					/>
					<p>{place.displayName}</p>
				</button>
			{/each}
		{:catch error}
			<p>{error.message}</p>
		{/await}
	</div>
</div>
