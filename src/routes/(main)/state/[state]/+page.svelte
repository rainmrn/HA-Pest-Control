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

	function handleAddToCart(place) {
		let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
		let alreadyExists = cart.find((e) => e.id === place.id);
		if (!alreadyExists) {
			cart.push(place);
			sessionStorage.setItem('cart', JSON.stringify(cart));
		}
		console.log(sessionStorage.getItem('cart'));
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

<img src={data.state.image} alt="" class="w-1/2 mx-auto rounded-lg mb-12" />

<div class="max-w-prose space-y-8 mx-auto mb-24">
	<p>{data.state.description}</p>
	<h2>List of attractions</h2>
	<div class="flex flex-col gap-1">
		{#await places}
			<p>Loading...</p>
		{:then places}
			{#each places as place}
				<button
					class="flex items-center gap-4 hover:bg-orange-500 hover:text-white duration-50 ease-in-out rounded-md cursor-pointer p-4"
					on:click={handleAddToCart(place)}
				>
					<img
						src={place.photos[0].getURI({ maxHeight: 200 })}
						class="w-[160px] h-[100px] object-cover rounded"
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
