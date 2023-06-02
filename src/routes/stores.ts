import { writable } from "svelte/store";
export const pokemonDisplay = writable({
	    name: "",
		number: 0,
		type: "",
        hp: 0,
		experience: 0,
		weight: 0,
		height: 0,
		image: ""
})
export const showPokeDetails = writable(false)
export const searchTerm = writable("")