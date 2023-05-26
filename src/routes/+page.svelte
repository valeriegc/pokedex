<script lang="ts">
	import PokemonTable from '$lib/PokemonTable.svelte';
	const Pokemon = [
		{
			name: 'Alexsaur',
			number: 34,
			type: 'Dorkemon',
			hp: 1000
		}
	];
</script>

<div class="px-5 max-w-4xl mx-auto">
	<h1 class="text-center text-7xl">Pokedex</h1>
	<div class="flex justify-center mt-7">
		<input class="input w-72" title="Input (text)" type="text" placeholder="Search for a pokemon" />
		<button type="button" class="btn-icon variant-filled ml-2">(icon)</button>
	</div>
	<PokemonTable pokeArr={Pokemon} />
</div>

<style lang="postcss">
</style>
