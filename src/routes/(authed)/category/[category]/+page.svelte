<script lang="ts">
	import type { Category } from '$lib/data/categories';
	import { levels } from '$lib/data/levels';
  	export let data: { categoryAct: Category };</script>

<svelte:head>
	<title>{data.categoryAct.name} - [nom du jeu]</title>
</svelte:head>

<a href="/vessel">Retourner au vaisseau</a>
<h1 class="text-3xl font-bold">{data.categoryAct.name ?? '...'}</h1>
<p>{data.categoryAct.description ?? ''}</p>
<br>

<section aria-labelledby="levels-title" class="border flex flex-col gap-4 p-4">
	<p>Liste des niveau disponibles</p>
	{#if data.categoryAct.levels?.length}
		<ul>
			{#each data.categoryAct.levels as level}
				<li class="border h-40 p-4 flex flex-col justify-between">
					<h2>{level.name}</h2>
					<p>{level.description}</p>
					<p>{level.duration} min</p> <span class="sr-only">Durée :</span>
					<a href="./{data.categoryAct.link}/{level.link}"
						class="bg-gradient-to-br from-emerald-400 via-indigo-400 to-indigo-500 font-semibold px-5 py-2 rounded-lg shadow hover:bg-gradient-to-br hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600"
						aria-label={`Jouer au niveau ${level.name}`}
					>
						Jouer
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p role="status">Aucun niveau disponible.</p>
	{/if}
</section>