<script lang="ts">
    import profile from '$lib/assets/img/ship_crew.png';

	export let data;

    const podium = data.topMembers.slice(0, 3); // top 3 du crew
</script>

<head>
    <title>Gérer mon équipage</title>
</head>

<div class="min-h-90 flex flex-col items-center justify-center p-6">
    {#if data.user.rank === 'unaffiliated'}
        <main class="w-full max-w-lg p-8 mt-20 mb-20 rounded-tl-3xl rounded-br-3xl bg-white/10 border border-white/6 shadow-lg backdrop-blur-md">

            <div class="flex items-center gap-4 mb-10">
                <div class="w-20 h-20 flex items-center rounded-xl font-bold justify-center">
                    <img class="h-8/10" src="{profile}" alt="">
                </div>
                <div>
                    <h1 class="text-3xl font-semibold text-white">Créer mon équipage</h1>
                    <p class="text-sm text-sky-200">Réunissez une équipe prête à relever tous les défis</p>
                </div>
            </div>

            <form method="post" class="space-y-4" action="/crew/create">
                <fieldset class="space-y-4 border-0 p-0">
                    <legend class="sr-only">Créer votre équipage</legend>
                    <label for="crew_name" class="block text-md mb-1 font-bold text-white">Nom d'équipage</label>
                    <input
                            type="text"
                            id="crew_name"
                            name="crew_name"
                            value=""
                            required
                            class="w-full rounded-lg
                    bg-white/3 border border-white/6 text-white placeholder-sky-200/50 
                    focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <label for="ship_name" class="block text-md mb-1 font-bold text-white">Nom du vaisseau</label>
                    <input
                            type="text"
                            id="ship_name"
                            name="ship_name"
                            value=""
                            required
                            class="w-full rounded-lg
                    bg-white/3 border border-white/6 text-white placeholder-sky-200/50 
                    focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />


                    <div class="flex items-center justify-between mb-12 gap-8">
                        <p class="text-sm text-sky-200">Après avoir créé votre équipage, invitez vos
                            collaborateurs!</p>
                        <button
                                type="submit"
                                class="bg-gradient-to-br from-emerald-400 via-indigo-400 to-indigo-500
                                font-semibold px-5 py-2 rounded-lg shadow
                                hover:bg-gradient-to-br hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600 text-nowrap"
                        >
                            Créer l'équipage
                        </button>
                    </div>
                </fieldset>
            </form>
        </main>

    {:else}
        {#if data.user.rank === 'captain'}
            <main class="w-full max-w-lg p-8 mt-20 mb-20 rounded-tl-3xl rounded-br-3xl bg-white/10 border border-white/6 shadow-lg backdrop-blur-md">

                <div class="flex items-center gap-4 mb-10">
                    <div class="w-20 h-20 flex items-center rounded-xl font-bold justify-center">
                        <img class="h-8/10" src="{profile}" alt="">
                    </div>
                    <div>
                        <h1 class="text-3xl font-semibold text-white">Gérer mon équipage</h1>
                        <p class="text-sm text-sky-200">Ajoutez des membres à votre équipage</p>
                    </div>
                </div>
                <form method="post" class="space-y-4" action="/crew/add-member">
                    <div class="flex items-center justify-between mb-12">

                        <fieldset class="space-y-4 border-0 p-0">
                            <legend class="sr-only">Membre à ajouter</legend>
                            <label for="email" class="block text-md mb-1 font-bold text-white">Email</label>
                            <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value=""
                                    required
                                    class="w-full rounded-lg
                    bg-white/3 border border-white/6 text-white placeholder-sky-200/50
                    focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <button
                                    type="submit"
                                    class="bg-gradient-to-br from-emerald-400 via-indigo-400 to-indigo-500
                        font-semibold px-3 py-1 rounded-lg shadow
                        hover:bg-gradient-to-br hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600"
                            >
                                Ajouter à {data.crew.vaisseau}
                            </button>
                        </fieldset>
                    </div>

                </form>
            </main>
        {/if}

    {/if}
    <h1 class="text-3xl font-semibold text-white">Officiers du vaisseau</h1>


<section class="w-screen flex flex-col items-center px-24 py-16">

  <section class="flex items-end gap-8 mb-12">
    {#each podium as user, index}
      <div class="flex flex-col items-center">
        <div class="mb-2 text-3xl">
          {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
        </div>
        <div class="h-36 w-36 rounded-lg bg-white/10 border border-white/6 
                    flex flex-col items-center justify-center text-white p-4">
          <p class="font-semibold text-lg">{user.username}</p>
                    <p class="bg-black/10 px-2 py-1 mt-4 rounded-lg text-sm text-white/80">{user.points} pts</p>
        </div>
        <p class="mt-2 text-white/70">{index + 1}ᵉ</p>
      </div>
    {/each}
  </section>
</section>
</div>