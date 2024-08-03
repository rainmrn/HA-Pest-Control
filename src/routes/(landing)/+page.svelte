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

<div class="py-12 space-y-4">
    <h1 class="font-bold text-4xl uppercase">Malaysia</h1>
    <p class="text-lg w-3/4">
        Discover Malaysia, a vibrant Southeast Asian gem known for its rich cultural tapestry, breathtaking landscapes, and diverse culinary delights. From the bustling metropolis of Kuala Lumpur with its iconic Petronas Twin Towers to the serene beaches of Langkawi and the lush rainforests of Borneo, Malaysia offers an extraordinary blend of modernity and tradition. Explore historic Melaka, savor the street food in Penang, and immerse yourself in the unique cultures of the indigenous tribes in Sarawak and Sabah. Whether you're seeking adventure, relaxation, or a cultural experience, Malaysia welcomes you with its warm hospitality and endless wonders.
    </p>
</div>

<div class="pb-12 space-y-4">
    <h2 class="uppercase">States of Malaysia</h2>
    
</div>

<style>
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
    }
    a div {
        border-radius: 0.5rem;
    }
</style>
