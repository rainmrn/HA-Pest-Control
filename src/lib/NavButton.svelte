<script>
	export let label,
		path = label.toLowerCase();
</script>

<a
	id={path}
	href="/{path}"
	class="nav-button font-bold text-base px-5 opacity-70 hover:cursor-pointer hover:opacity-100"
	>{label.toUpperCase()}
</a>
