<script lang="ts">
	import vessel from '$lib/assets/img/vessel/vessel.avif';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let width = 0;
	let height = 0;
	let imgEl: HTMLImageElement;

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

						<!-- Cafeteria -->
						<polygon on:click={() => goToCategory('equipements')}
							points="1352,146,1477,19,1876,19,2059,201,2059,556,1892,723,1505,715,1347,561" 
						/>
						
						<!-- Navigation -->
						<polygon on:click={() => goToCategory('equipements')}
							points="2728,571,2730,865,2844,865,2953,780,2950,653,2847,568" 
						/>

						<!-- Communication -->
						<polygon on:click={() => goToCategory('equipements')}
							points="1839,1300,2156,1300,2156,1477,2090,1541,1902,1541,1836,1475"
						/>
						
						<!-- Admin -->
						<polygon on:click={() => goToCategory('equipements')}
							points="1868,805,2025,805,2025,1088,1868,1088"
						/>

						<!-- Admin -->
						<polygon on:click={() => goToCategory('equipements')}
							points="2025,805,2183,805,2185,1032,2133,1088,2025,1088"
						/>
						
						<!-- Storage -->
						<polygon on:click={() => goToCategory('equipements')}
							points="1516,962,1802,959,1802,1541,1553,1541,1418,1412,1421,1055"
						/>
						
						<!-- Reactor -->
						<polygon on:click={() => goToCategory('equipements')}
							points="436,498,434,604,534,604,534,900,434,900,434,1009,373,1009,259,932,257,572,370,498"
						/>
						
						<!-- Electrical -->
						<polygon on:click={() => goToCategory('equipements')}
							points="1096,872,1415,872,1418,949,1339,1031,1342,1155,1275,1219,1188,1219,1188,1293,1096,1293"
						/>
						
						<!-- MedBay -->
						<polygon on:click={() => goToCategory('equipements')}
							points="1040,457,1308,457,1310,618,1415,724,1415,804,1093,804,1042,740"
						/>

						<!-- Security -->
						<!-- <polygon on:click={() => goToCategory('equipements')}
							points="2341,2581 2855,2581 2855,1734 2704,1583 2523,1583 2341,1765" 
						/> -->
						
						<!-- Oxygen -->
						<!-- <polygon on:click={() => goToCategory('equipements')}
							points="2233,541,2233,761,2000,758,2000,666,2098,568,2098,541"
						/> -->

						<!-- Weapon -->
						<!-- <polygon on:click={() => goToCategory('equipements')}
							points="2191,156,2342,156,2477,294,2482,490,2254,490,2188,426"
						/> -->
						
						<!-- Shield -->
						<!-- <polygon on:click={() => goToCategory('equipements')}
							points="2479,1049,2479,1242,2342,1382,2191,1382,2188,1115,2254,1049"
						/> -->						
					</svg>
				{/if}
			</div>
		</div>
		<div>
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