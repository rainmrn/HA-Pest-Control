<script>
	import Nav from '$lib/Nav.svelte';
</script>

<div id="bg" class="w-screen h-[60vh]">
	<Nav></Nav>
	<div class="flex items-center justify-center h-full">
		<h1 class="text-white font-bold text-4xl">Explore your dream place with us.</h1>
	</div>
</div>

<style>
	#bg {
		background-image: url('/landing.jpg');
		background-size: cover;
		background-position: center;
        background-reapeat: no-repeat;
        background-color: rgba(0, 0, 0, 0.35);
        background-blend-mode: darken;
	}
</style>
