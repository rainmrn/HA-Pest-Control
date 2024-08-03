<script>
	import NavButton from '$lib/NavButton.svelte';
</script>

<nav class="mx-auto mb-5">
	<div class="flex items-center place-content-between pt-8 pb-5">
		<a href="/" class="text-white font-bold">Wardiere Inc.</a>
		<div class="flex justify-between items-center">
			<NavButton label="states" />
			<NavButton label="for you" />
			<NavButton label="about us" />
		</div>
	</div>
</nav>
