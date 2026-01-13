<script>
    import GameStep from "$lib/components/GameStep.svelte";
    
    let step = $state();
    let steps = $state([]);

    function handleValidate(newStep) {
        step = newStep;
        steps.push(step);
    }

    let choices_0 = [
            "Acheter le vaisseau",
            "Ne pas acheter le vaisseau"
        ];

</script>

<p>Etapes : {steps.join(' > ')}</p>
{#if !step}
    <button onclick={() => {handleValidate("0")}} >
        Commencer le jeu
    </button>
{/if}

{#if step == "0"}
    <GameStep
        step="1"
        text="Welcome to the Beginner Purchase Game!"
        choices={choices_0}
        image="/game/purchases-beginner/game_img_test.jpg"
        imageAlt="vaisseau"
        audio="/game/purchases-beginner/audio/0.m4a"
        audioLoop={true}
        onValidate={handleValidate}
    />
{/if}
{#if step == "1_0"}
    <GameStep
        step="2"
        text="You chose to buy the spaceship!"
        audio="/game/purchases-beginner/audio/0_1.mp3"
        duration=-1
        onValidate={handleValidate}
    />
{/if}
{#if step == "1_1"}
    <GameStep step="2" text="You chose not to buy the spaceship." choices={["Continue"]} onValidate={handleValidate} />
{/if}
{#if step == "2_0"}
    <p>End of the game. You bought the spaceship.</p>
{/if}
{#if step == "2_1"}
    <p>End of the game. You did not buy the spaceship.</p>
{/if}