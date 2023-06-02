<script lang="ts">
	import { loadPokemon } from '../routes/searchPokemon';
	interface PokeData {
		name: string;
		number: number;
		type: string;
		hp: number;
	}
	export let pokeArr: PokeData[];
	import { searchTerm } from '../routes/stores';
</script>

<div class="table-container mt-6 mb-6">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Name</th>
				<th>Number</th>
				<th>Type</th>
				<th>HP</th>
			</tr>
		</thead>
		<tbody>
			{#each pokeArr as pokemon, i}
				<tr class="cursor-pointer" on:click={() => loadPokemon(($searchTerm = pokemon.name))}>
					<td>{pokemon.name}</td>
					<td>{pokemon.number}</td>
					<td>{pokemon.type}</td>
					<td>{pokemon.hp}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
