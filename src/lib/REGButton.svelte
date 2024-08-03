<script>
	export let pill = false;
</script>
{#if pill}
	<div class="px-6 py-4 text-black bg-white rounded-full border font-bold  hover:bg-black hover:text-white border-black duration-50 ease-in-out cursor-pointer">
		<slot></slot>
	</div>
{:else}
	<div class="px-6 py-4 text-black bg-white rounded-sm border font-bold  hover:bg-black hover:text-white border-black duration-50 ease-in-out cursor-pointer">
		<slot></slot>
	</div>
{/if}
