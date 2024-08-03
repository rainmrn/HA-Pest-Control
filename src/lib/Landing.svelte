<script>
	import Nav from '$lib/Nav.svelte';
    import CtaButton from '$lib/CTAButton.svelte';
</script>

<div id="bg" class="w-screen">
	<Nav></Nav>
	<div class="mx-auto w-3/4">
		<div class="space-y-6 max-w-[50ch] pb-16 text-center mx-auto">
			<h1 class="text-white font-bold text-4xl uppercase">Explore your dream place with us</h1>
			<p class="text-white text-lg max-w-prose">
				Make the experience of traveling to your dream tourist destination come true with us. We
				will provide the best experience of your life.
			</p>
			<CtaButton>Pick Your Destination</CtaButton>
		</div>
	</div>
</div>

<style>
	#bg {
		background-image: url('/landing.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-color: rgba(0, 0, 0, 0.6);
		background-blend-mode: darken;
	}
</style>
