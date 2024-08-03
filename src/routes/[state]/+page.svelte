<script>
	import { page } from '$app/stores';
    import { toTitleCase } from '$lib/utils'; // Import the utility function

	// Subscribe to the page store to get the route parameters
	let params;
	$: ({ params } = $page);
</script>

<!-- Display the route parameters -->
<p>State: {toTitleCase(params.state)}</p>
