<script lang="ts">
	import { Paginator } from '@skeletonlabs/skeleton';
	import PokemonModal from '$lib/PokemonModal.svelte';
	import PokemonTable from '$lib/PokemonTable.svelte';
	import { pokemonDisplay, showPokeDetails, searchTerm } from './stores.js';
	import { loadPokemon } from './searchPokemon.js';
	export let data;
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
				bind:value={$searchTerm}
			/>
			<button
				type="button"
				class="btn-icon variant-filled ml-2 p-2"
				on:click={() => loadPokemon($searchTerm, $pokemonDisplay, $showPokeDetails)}
				><img src="searchicon.svg" /></button
			>
		</div>
	</div>
	{#if !$showPokeDetails}
		<PokemonTable pokeArr={data.pokemons} />
		<Paginator />
	{:else}
		<PokemonModal />
	{/if}
</div>

<style lang="postcss">
</style>
