<script lang="ts">
    import profile from '$lib/assets/img/ship_crew.png';

    let passwordInput;
    let showPassword = false;


    function togglePassword() {
        showPassword = !showPassword;
    }

    let rank = 'captain';
    let crewId = null;
    let crewName = "3IL";

    let ranking = 1;       // 1 | 2 | 3
    let username = "jeanbon";
    let linkedin = "test";

</script>

<head>
    <title>Gérer mon crew</title>
</head>

<div class="min-h-90 flex flex-col items-center justify-center p-6">
    {#if rank === 'unaffiliated'}
        <main class="w-full max-w-lg p-8 mt-20 mb-20 rounded-tl-3xl rounded-br-3xl bg-white/10 border border-white/6 shadow-lg backdrop-blur-md">

            <div class="flex items-center gap-4 mb-10">
                <div class="w-20 h-20 flex items-center rounded-xl font-bold justify-center">
                    <img class="h-8/10" src="{profile}" alt="">
                </div>
                <div>
                    <h1 class="text-3xl font-semibold text-white">Créer mon équipage</h1>

                </div>
            </div>

            <form method="post" class="space-y-4">
                <fieldset class="space-y-4 border-0 p-0">
                    <legend class="sr-only">Créer votre équipage</legend>
                    <label for="crew_name" class="block text-md mb-1 font-bold text-white">Nom d'équipage</label>
                    <input
                            type="text"
                            id="crew_name"
                            name="crew_name"
                            value="3IL"
                            required
                            class="w-full rounded-lg
                    bg-white/3 border border-white/6 text-white placeholder-sky-200/50 
                    focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />


                    <div class="flex items-center justify-between mb-12">
                        <p class="text-xs text-gray-500">Après avoir créé votre équipage, invitez vos
                            collaborateurs!</p>
                        <button
                                type="submit"
                                class="bg-gradient-to-br from-emerald-400 via-indigo-400 to-indigo-500
                        font-semibold px-3 py-1 rounded-lg shadow
                        hover:bg-gradient-to-br hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-600"
                        >
                            Créer l'équipage
                        </button>
                    </div>
                </fieldset>
            </form>
        </main>

    {:else}
        {#if rank === 'captain'}
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
                <form method="post" class="space-y-4">
                    <div class="flex items-center justify-between mb-12">

                        <fieldset class="space-y-4 border-0 p-0">
                            <legend class="sr-only">Membre à ajouter</legend>
                            <label for="crew_name" class="block text-md mb-1 font-bold text-white">Nom
                                d'utilisateur</label>
                            <input
                                    type="text"
                                    id="crew_name"
                                    name="crew_name"
                                    value="3IL"
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
                                Ajouter à {crewName}
                            </button>
                        </fieldset>
                    </div>

                </form>
            </main>
        {/if}

    {/if}
    <h1 class="text-3xl font-semibold text-white">Officiers du vaisseau</h1>

    <div
            class=""
    >
        <!-- Rank -->
        <div
                class="flex items-center justify-center
           w-10 h-10 rounded-lg
           font-bold text-lg
           {ranking === 1 ? 'bg-yellow-400 text-sky-900' : ''}
           {ranking === 2 ? 'bg-slate-300 text-sky-900' : ''}
           {ranking === 3 ? 'bg-amber-600 text-white' : ''}"
        >
            {ranking}
        </div>

        <!-- Username -->
        <div class="flex-1">
            <p class="text-white font-semibold text-md truncate">
                {username}
            </p>
            <p class="text-sky-200 text-xs">
                Rank #{ranking}
            </p>
        </div>

        <a
                href="linkedin.com/{linkedin}"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center
           w-9 h-9 rounded-lg
           bg-sky-600 hover:bg-sky-500
           text-white transition"
                aria-label="LinkedIn profile"
        >
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5"
            >
                <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.6-1.8 3.9 0 4.6 2.6 4.6 5.9V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z"/>
            </svg>
        </a>
    </div>


</div>