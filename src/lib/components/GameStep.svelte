<script>
    let { step, text, choices, image, imageAlt, audio, audioLoop, duration, onValidate } = $props();
    
    let result;

    function handleClick(index) {
        const nextValue = step + "_" + index;
        onValidate(nextValue);
    }

    let audioElement;
    $effect(() => {
        // --- Logique Audio ---
        if (audio) {
            audioElement.play();
        }

        // --- Logique Duration (Validation automatique) ---
        if (duration) {
            if (duration == - 1 && audio && !audioLoop) {
                // Si duration est -1, on attend la fin de l'audio
                audioElement.onended = () => {
                    onValidate(step + "_0");
                };
                return;
            }
            else {
                const timer = setTimeout(() => {
                    // On renvoie automatiquement le step actuel suivi de _0
                    onValidate(step + "_0");
                }, duration * 1000); // Conversion secondes en millisecondes
                return () => clearTimeout(timer);
            }
            // Nettoyage du timer si le composant est détruit avant la fin
            
        }
    });
</script>

<div>
    {#if image}
        <img src={image} alt="{imageAlt}" class="w-200 h-auto block"/>
    {/if}
	<p>{text}</p>
    <br>

    {#if !choices && !duration}
        <button onclick={() => {handleClick(0); }}>
            ...
        </button>
    {/if}

    {#each choices as choice, i}
        <button onclick={() => { result = i; handleClick(result); }}>
            {choice}
        </button>
    {/each}

    {#if audio}
        <audio bind:this={audioElement} src={audio} loop={audioLoop}></audio>
    {/if}
</div>
