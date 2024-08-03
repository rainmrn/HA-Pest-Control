<script>
	import Title from '$lib/Title.svelte';
	import RegButton from '$lib/REGButton.svelte';
	import { onMount } from 'svelte';
	let list = [];
	let startDate = '';
	let endDate = '';
	let travelPlan = [];

	function handleDel(id) {
		list = JSON.parse(sessionStorage.getItem('list')) || [];
		list = list.filter((item) => item.id !== id);
		sessionStorage.setItem('list', JSON.stringify(list));
	}

	function calcRecommendPath(start, end) {
		travelPlan = []; // Reset the travel plan
		let list = JSON.parse(sessionStorage.getItem('list')) || [];
		if (list.length === 0) {
			alert('Your list is empty.');
			return;
		}
		// Parse the start and end dates
		const startDate = new Date(start);
		const endDate = new Date(end);

		// Convert time difference from milliseconds to days
		let dayDiff = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

		const destinationsPerDay = Math.ceil(list.length / dayDiff);
		for (let i = 0; i < dayDiff; i++) {
			const start = i * destinationsPerDay;
			const end = start + destinationsPerDay;
			travelPlan.push(list.slice(start, end));
			travelPlan = travelPlan; // svelte only updates when the variable is reassigned
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
					<button on:click={handleDel(item.id)}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							class="fill-orange-700"
							viewBox="0 0 512 512"
						>
							<path
								d="M 209 48 L 303 48 L 209 48 L 303 48 Q 307 48 310 52 L 329 80 L 329 80 L 184 80 L 184 80 L 203 52 L 203 52 Q 205 48 209 48 L 209 48 Z M 386 80 L 350 25 L 386 80 L 350 25 Q 332 1 303 0 L 209 0 L 209 0 Q 180 1 163 25 L 126 80 L 126 80 L 112 80 L 56 80 Q 34 82 32 104 Q 34 126 56 128 L 68 128 L 68 128 L 92 453 L 92 453 Q 94 478 112 495 Q 130 511 155 512 L 357 512 L 357 512 Q 382 511 400 495 Q 418 478 420 453 L 444 128 L 444 128 L 456 128 L 456 128 Q 478 126 480 104 Q 478 82 456 80 L 448 80 L 386 80 Z M 396 128 L 373 449 L 396 128 L 373 449 Q 370 463 357 464 L 155 464 L 155 464 Q 142 463 139 449 L 116 128 L 116 128 L 396 128 L 396 128 Z"
							/>
						</svg></button
					>
				</div>
			{/each}
		</div>
	{/if}
	<hr />

	<form>
		<div class="nativeDatePicker">
			<label for="bday">Trip start date:</label>
			<input type="date" id="trip-start" name="trip-start" bind:value={startDate} />
		</div>
		<div class="nativeDatePicker">
			<label for="bday">Trip end date:</label>
			<input type="date" id="trip-end" name="trip-end" bind:value={endDate} />
		</div>
	</form>

	<div class="flex gap-4">
		<button on:click={calcRecommendPath(startDate, endDate)}>
			<RegButton>Calculate recommended path</RegButton>
		</button>
		<button on:click={checkWeather}>
			<RegButton>Check weather forecast</RegButton>
		</button>
	</div>

	{#if travelPlan.length > 0}
		<h2>Recommended path</h2>
		<div class="flex flex-col gap-4">
			{#each travelPlan as day, i}
				<div>
					<h3 class="pb-4">Day {i + 1}</h3>
					{#each day as item}
						<p>{item.displayName}</p>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>
