import states from '$lib/states.json';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const state = states.state.find(e => params.state === e.slug);
    if (state) {
        return {
            state
        };
    }

    throw error(404, 'State not found');
}