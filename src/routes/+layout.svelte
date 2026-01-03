<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="bg-orange-300">
	<ul class="flex gap-4 p-4">
		<li><a href="/">Accueil</a></li>

		{#if data.user}
			<li><a href="/manage_account">Gérer le compte</a></li>
			<li><a href="/select_game">Choix du jeu</a></li>
		{:else}
			<li><a href="/login">Connexion</a></li>
			<li><a href="/register">Inscription</a></li>
		{/if}

		
		<li><a href="/news">Articles</a></li>
	</ul>
</nav>

<main>
	{@render children()}
</main>

<footer class="flex justify-center gap-10 text-center p-4 bg-gray-200">
	<p>© 2025 Spaceship Inc.</p>
	<a href="/accessibility">Accessibilité</a>
</footer>