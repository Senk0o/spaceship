<script lang="ts">
	import { rooms } from '$lib/data/rooms';
	import type { Category } from '$lib/data/categories';

	import vessel from '$lib/assets/img/vessel/vessel.avif';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let width = 0;
	let height = 0;
	let imgEl: HTMLImageElement;
	let hoveredCategory: Category | null = null;

	function goToCategory(name: string) {
		goto('/category');
	}

	onMount(() => {
		imgEl.onload = () => {
			width = imgEl.naturalWidth;
			height = imgEl.naturalHeight;
		};
	});
</script>

<head>
	<title>Vaisseau - [nom du jeu]</title>
</head>

<h1 class="text-3xl font-bold">Vaisseau</h1>

{#if true}
	<div class="flex">
		<div>
			<p>Vous appartenez au vaisseau : <span>[nom du vaisseau]</span></p>
			<p>Choisisser le domaine auxquels vous voulez en choisissant la salle ou via le menu des catégories.</p>

			<div class="relative inline-block max-w-6xl">
				<img
					bind:this={imgEl}
					src={vessel}
					alt="Plan du vaisseau"
					class="w-full h-auto block"
				/>

				{#if width && height}
					<svg
						viewBox={`0 0 ${width} ${height}`}
						class="absolute inset-0 w-full h-full"
						preserveAspectRatio="xMidYMid meet"
					>
						{#each rooms as room}
							<polygon
								points={room.points}
								on:mouseenter={() => (hoveredCategory = room.category)}
								on:mouseleave={() => (hoveredCategory = null)}
								on:click={() => goToCategory(room.category.id)}
								class="cursor-pointer hover:fill-blue-500/30 fill-blue-300/30"
							/>
						{/each}				
					</svg>
				{/if}
			</div>
		</div>
		<div>
			<section class="border">
				{#if hoveredCategory}
					<p class="font-bold">{hoveredCategory.name}</p>
					<p class="text-sm">
						{hoveredCategory.description}
					</p>
				{:else}
					<p class="italic text-gray-400">
						Survolez une salle du vaisseau
					</p>
				{/if}
			</section>
			<section class="border">
				<h2>Catégories</h2>
				<ul>
					<li><a href="/category">Equipements</a></li>
					<li><a href="/category">Formation</a></li>
					<li><a href="/category">Sensibilisation</a></li>
					<li><a href="/category">Accessibilité</a></li>
					<li><a href="/category">Parcours UX</a></li>
					<li><a href="/category">Usages</a></li>
					<li><a href="/category">Services numériques</a></li>
					<li><a href="/category">Achats</a></li>
					<li><a href="/category">Fin de vie des équipements</a></li>
				</ul>
			</section>
		</div>
	</div>
	
	
{:else}
	<p>Vous n'appartenez pas encore à un équipage.</p>
	<p>Créez en un <a href="">ici</a> ou attendez que le capitaine d'un équipage vous ajoute dans le sien.</p>
{/if}