<script>
	import { pokemonDisplay } from '../routes/stores';
</script>

<div class="mt-12 rounded-xl">
	<div class="table w-auto px-20 py-8 m-auto">
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
