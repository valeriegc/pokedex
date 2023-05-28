<script lang="ts">
	interface PokeData {
		name: string;
		number: number;
		type: string;
		hp: number;
	}
	export let pokeArr: PokeData[];
	import { Paginator } from '@skeletonlabs/skeleton';
</script>

<div class="table-container mt-6">
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
				<tr class="cursor-pointer">
					<td>{pokemon.name}</td>
					<td>{pokemon.number}</td>
					<td>{pokemon.type}</td>
					<td>{pokemon.hp}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
