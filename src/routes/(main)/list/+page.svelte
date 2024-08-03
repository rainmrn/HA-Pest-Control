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
					<button on:click={handleDel(item.id)}><svg xmlns="http://www.w3.org/2000/svg" height="1em" class="fill-orange-700" viewBox="0 0 512 512">
						<path d="M 209 48 L 303 48 L 209 48 L 303 48 Q 307 48 310 52 L 329 80 L 329 80 L 184 80 L 184 80 L 203 52 L 203 52 Q 205 48 209 48 L 209 48 Z M 386 80 L 350 25 L 386 80 L 350 25 Q 332 1 303 0 L 209 0 L 209 0 Q 180 1 163 25 L 126 80 L 126 80 L 112 80 L 56 80 Q 34 82 32 104 Q 34 126 56 128 L 68 128 L 68 128 L 92 453 L 92 453 Q 94 478 112 495 Q 130 511 155 512 L 357 512 L 357 512 Q 382 511 400 495 Q 418 478 420 453 L 444 128 L 444 128 L 456 128 L 456 128 Q 478 126 480 104 Q 478 82 456 80 L 448 80 L 386 80 Z M 396 128 L 373 449 L 396 128 L 373 449 Q 370 463 357 464 L 155 464 L 155 464 Q 142 463 139 449 L 116 128 L 116 128 L 396 128 L 396 128 Z" />
					  </svg></button>
				</div>
			{/each}
		</div>
	{/if}

	<div class="flex gap-4">
		<button on:click={calcRecommendPath}>
			<RegButton>Calculate recommended path</RegButton>
		</button>
		<button on:click={checkWeather}>
			<RegButton>Check weather forecast</RegButton>
		</button>
	</div>
</div>
