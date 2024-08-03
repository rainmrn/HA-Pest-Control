<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
</script>

<Splide
	options={{
		type: 'loop',
		focus: 'center',
		perPage: 3,
		heightRatio: 0.4,
		gap: '1em'
	}}
	aria-label="My Favorite Images"
>
	<SplideSlide>
		<a href="" class="group">
			<img src="/landing-carousell-1.jpg" />
			<div
				class="absolute bg-black bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 left-0 flex justify-center items-center duration-150 ease-in-out"
			>
				<p class="text-white font-bold text-xl opacity-0 group-hover:opacity-100">Something</p>
			</div>
		</a>
	</SplideSlide>
	<SplideSlide>
		<a href="" class="group duration-150 ease-in-out">
			<img src="/landing-carousell-2.jpg" />
			<div
				class="absolute bg-black bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 left-0 flex justify-center items-center duration-150 ease-in-out"
			>
				<p class="text-white font-bold text-xl opacity-0 group-hover:opacity-100">Something</p>
			</div>
		</a>
	</SplideSlide>
	<SplideSlide>
		<a href="" class="group duration-150 ease-in-out">
			<img src="/landing-carousell-3.jpg" />
			<div
				class="absolute bg-black bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 left-0 flex justify-center items-center duration-150 ease-in-out"
			>
				<p class="text-white font-bold text-xl opacity-0 group-hover:opacity-100">Something</p>
			</div>
		</a>
	</SplideSlide>
	<SplideSlide>
		<a href="" class="group duration-150 ease-in-out">
			<img src="/landing-carousell-4.jpg" />
			<div
				class="absolute bg-black bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 left-0 flex justify-center items-center duration-150 ease-in-out"
			>
				<p class="text-white font-bold text-xl opacity-0 group-hover:opacity-100">Something</p>
			</div>
		</a>
	</SplideSlide>
	<SplideSlide>
		<a href="" class="group duration-150 ease-in-out">
			<img src="/landing-carousell-5.jpg" />
			<div
				class="absolute bg-black bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 left-0 flex justify-center items-center duration-150 ease-in-out"
			>
				<p class="text-white font-bold text-xl opacity-0 group-hover:opacity-100">Something</p>
			</div>
		</a>
	</SplideSlide>
</Splide>

<style>
</style>
