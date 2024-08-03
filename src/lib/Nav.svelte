<script>
	import NavButton from '$lib/NavButton.svelte';
	import { toTitleCase }  from '$lib/utils.js';
	import { onMount } from 'svelte';
	import tippy from 'tippy.js';
	let places = [
		'Johor',
		'Kedah',
		'Kelantan',
		'Malacca',
		'Negeri Sembilan',
		'Pahang',
		'Penang',
		'Perlis',
		'Sabah',
		'Sarawak',
		'Selangor',
		'Terengganu'
	];

	export let light;

	onMount(() => {
		tippy('#places', {
			content: placesD.innerHTML,
			allowHTML: true,
			interactive: true,
		});
	});
</script>

<div id="placesD" style="display: none;">
	<div class="bg-white rounded px-2 py-4 border shadow-lg space-y-1">
		{#each places as place}
			<a href={`/state/${place}`.toLowerCase()} class="block nav-button text-base px-5 text-black opacity-70 hover:cursor-pointer hover:opacity-100">{toTitleCase(place)}
			</a>
		{/each}
		</div>
</div>


{#if light}
	<nav class="mx-auto mb-5 w-3/4 text-black">
		<div class="flex items-center place-content-between pt-8 pb-5">
			<a href="/" class="font-bold text-lg">Wardiere Inc.</a>
			<div class="flex justify-between items-center">
				<NavButton label="places" />
				<NavButton label="transport" />
				<NavButton label="accomodation" />
				<NavButton label="about us" />
			</div>
		</div>
	</nav>
{:else}
	<nav class="mx-auto mb-5 w-3/4 text-white">
		<div class="flex items-center place-content-between pt-8 pb-5">
			<a href="/" class="font-bold text-lg">Wardiere Inc.</a>
			<div class="flex justify-between items-center">
				<NavButton label="places" />
				<NavButton label="transport" />
				<NavButton label="accomodation" />
				<NavButton label="about us" />
			</div>
		</div>
	</nav>
{/if}
