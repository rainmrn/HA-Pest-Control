<script>
	export let label;
	import { page } from '$app/stores';
</script>

<a id={label}
	href="/{label}"
	class="nav-button font-bold text-base px-5 opacity-70 hover:cursor-pointer hover:opacity-100"
	aria-current={$page.url.pathname === `/${label}`}
	>{label.toUpperCase()}
</a>
