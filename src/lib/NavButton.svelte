<script>
	export let label;
	import { page } from '$app/stores';
</script>

<a
	href="/{label}"
	class="font-bold text-base border-b-2 border-transparent text-white
           flex-1
           hover:cursor-pointer
           hover:border-b-2 hover:text-secondary-50 duration-100 ease-out"
	aria-current={$page.url.pathname === `/${label}`}>{label.toUpperCase()}</a
>
