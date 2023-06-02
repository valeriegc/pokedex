<script lang="ts">
	import PokemonModal from '$lib/PokemonModal.svelte';
	import PokemonTable from '$lib/PokemonTable.svelte';
	import { pokemonDisplay } from './stores.js';

	export let data;
	let showPokeDetails = true;
	let searchTerm = '';

	async function loadPokemon(searchTerm: string) {
		const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
		const json = await resp.json();
		const type = json.types.map((t) => t.type.name).join('/');
		$pokemonDisplay = {
			name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
			number: json.order,
			type: type,
			hp: json.stats[0].base_stat,
			experience: json.base_experience,
			weight: json.weight,
			height: json.height,
			image: json.sprites.other.dream_world.front_default
		};
		return { $pokemonDisplay };
	}
</script>

<div class="px-5 max-w-4xl mx-auto mt-8">
	<div class="relative">
		<img
			src="pokeball.png"
			alt="image of a pokeball"
			class="w-24 m-auto md:absolute top-8 left-12 md:w-44"
		/>
		<h1 class="text-center text-7xl mb-3">Pokedex</h1>
		<div class="flex justify-center mt-7">
			<input
				class="input w-72"
				title="Input (text)"
				type="text"
				placeholder="Search for a pokemon"
				bind:value={searchTerm}
			/>
			<button
				type="button"
				class="btn-icon variant-filled ml-2 p-2"
				on:click={() => loadPokemon(searchTerm)}><img src="searchicon.svg" /></button
			>
		</div>
	</div>
	{#if !showPokeDetails}
		<PokemonTable pokeArr={data.pokemons} />
	{:else}
		<PokemonModal />
	{/if}
</div>

<style lang="postcss">
</style>
