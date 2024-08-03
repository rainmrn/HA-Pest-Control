<script>
	import NavButton from '$lib/NavButton.svelte';
	import { onMount } from 'svelte';
	import tippy from 'tippy.js';
	import { state } from '$lib/states.json';

	export let light;

	onMount(() => {
		tippy('#states', {
			content: placesD.innerHTML,
			allowHTML: true,
			interactive: true
		});
	});
</script>

<div id="placesD" style="display: none;">
	<div class="bg-white rounded px-2 py-4 border shadow-lg space-y-1">
		{#each state as s}
			<a
				href={`/states/${s.slug}`}
				class="block nav-button text-base px-5 text-black opacity-70 hover:cursor-pointer hover:opacity-100"
				>{s.name}
			</a>
		{/each}
	</div>
</div>

{#if light}
	<nav class="mx-auto mb-5 w-3/4 text-black">
		<div class="flex items-center place-content-between pt-8 pb-5">
			<a href="/" class="font-bold text-lg">Travel2Malaysia</a>
			<div class="flex justify-between items-center">
				<NavButton label="states" />
				<NavButton label="transport" />
				<NavButton label="list" />
				<NavButton path="about-us" label="about us" />
			</div>
		</div>
	</nav>
{:else}
	<nav class="mx-auto mb-5 w-3/4 text-white">
		<div class="flex items-center place-content-between pt-8 pb-5">
			<a href="/" class="font-bold text-lg">Travel2Malaysia</a>
			<div class="flex justify-between items-center">
				<NavButton label="states" />
				<NavButton label="transport" />
				<NavButton label="list" />
				<NavButton path="about-us" label="about us" />
			</div>
		</div>
	</nav>
{/if}
