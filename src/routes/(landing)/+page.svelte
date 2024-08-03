<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
</script>

<Splide
    options={{
        type: 'loop',
        focus: 'center',
        perPage: 3,
        heightRatio: 0.3,
        gap: '1em'
    }}
    aria-label="My Favorite Images"
>
    <SplideSlide>
        <img src="/landing-carousell-1.jpg" />
    </SplideSlide>
    <SplideSlide>
        <img src="/landing-carousell-2.jpg" />
    </SplideSlide>
    <SplideSlide>
        <img src="/landing-carousell-3.jpg" />
    </SplideSlide>
    <SplideSlide>
        <img src="/landing-carousell-4.jpg" />
    </SplideSlide>
    <SplideSlide>
        <img src="/landing-carousell-5.jpg" />
    </SplideSlide>
</Splide>
