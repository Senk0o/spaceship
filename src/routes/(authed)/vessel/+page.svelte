<script lang="ts">
	import vessel from '$lib/assets/img/vessel/vessel.webp';
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
			<img class="h-150" src="{vessel}" alt="" usemap="#carteVaisseau">
			<map name="carteVaisseau">
				<area target="" alt="" title="" href="/category" coords="2341,2581,2855,2581,2855,1734,2704,1583,2523,1583,2341,1765" shape="poly">
			</map>

			<img src="{vessel}" usemap="#image-map">

			<map name="image-map">
				<area target="" alt="" title="" href="/category" coords="2341,2581,2855,2581,2855,1734,2704,1583,2523,1583,2341,1765" shape="poly">
				<area target="" alt="" title="" href="" coords="3894,1910,5771,192" shape="rect">

			</map>
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