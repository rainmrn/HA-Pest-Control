<script>
	import Title from '$lib/Title.svelte';
	import { onMount } from 'svelte';
    let cart = [];

	onMount(() => {
		cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        console.log(cart);
	});
</script>

<Title>Cart</Title>

<div class="max-w-prose space-y-8 mx-auto mb-24">
	{#if cart.length === 0}
		<p>Your cart is empty.</p>
	{:else}
		<h2>Items in your cart</h2>
		<div class="flex flex-col gap-1">
			{#each cart as item}
            <p>{item.displayName}</p>
			{/each}
		</div>
	{/if}
</div>
