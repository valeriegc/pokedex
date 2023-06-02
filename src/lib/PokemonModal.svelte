<script>
	import { pokemonDisplay, showPokeDetails } from '../routes/stores';
</script>

<div class="mt-12 rounded-xl relative">
	<div class="table w-auto px-20 py-8 m-auto">
		<button
			type="button"
			class="btn-icon variant-filled ml-2 p-2 absolute right-40 top-5 text-4xl rounded-full h-10 w-10 p-3"
			on:click={() => ($showPokeDetails = false)}>x</button
		>
		<h1 class="text-center mb-6 text-xl">{$pokemonDisplay.name}</h1>
		<div class="flex justify-center gap-24">
			<div class="space-y-3">
				<ul>Name: {$pokemonDisplay.name}</ul>
				<ul>HP: {$pokemonDisplay.hp}</ul>
				<ul>Experience: {$pokemonDisplay.experience}</ul>
				<ul>Type: {$pokemonDisplay.type}</ul>
				<ul>Height: {$pokemonDisplay.height}</ul>
				<ul>Weight: {$pokemonDisplay.weight}</ul>
				<ul>Number: {$pokemonDisplay.number}</ul>
			</div>
			<img src={$pokemonDisplay.image} class="w-48 h-auto" />
		</div>
	</div>
</div>
