<script>
	export let label;
	import { page } from '$app/stores';
</script>

<a
	href="/{label}"
	class="font-bold text-base px-5 text-white opacity-70 hover:cursor-pointer hover:opacity-100"
	aria-current={$page.url.pathname === `/${label}`}>{label.toUpperCase()}</a
>
