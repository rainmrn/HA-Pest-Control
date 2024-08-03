<script>
	let states = [
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

	export let data;
</script>

<div class="w-screen h-screen flex justify-center items-center bg-gray-100">
	<div class="w-full max-w-md text-center">
		<h1 class="text-2xl font-bold">States</h1>
		<div class="flex flex-wrap mx-auto gap-4">
			{#each data.states as state}
				<a href="./{state.toLowerCase()}" class="underline p-4 border">{state}</a>
			{/each}
		</div>
	</div>
</div>
