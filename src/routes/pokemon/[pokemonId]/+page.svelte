<script>
    import {page} from '$app/stores';
    import { onMount } from 'svelte';
    const pokemonId = $page.params.pokemonId;

    // import example from '$lib/exampleMon.json';
    import Types from '$lib/components/types.svelte';
    import StatBar from '$lib/components/stat_bar.svelte';

    // import type { PageData } from './$types';
    export let data;
    console.log(data);
</script>



<div class="h-screen flex flex-col">
    <header class="bg-dexter">
        <div class="h-16 w-full text-white">
            <a href="/">Return</a>
        </div>
    </header>

    <main class="flex-grow overflow-auto">
        <section class="flex justify-center items-center p-4">
            <!-- <div class="h-32 w-32 border-2 border-black border-dashed rounded-xl"/> -->
            <img class="h-48 w-48" src={data.sprites.other['official-artwork'].front_default} alt={pokemonId + ' Sprite'}>
        </section>

        <section class="flex flex-col items-center justify-center mb-2">
            <div class="flex">
                {#each data.types as type}
                    <Types type={type.type.name} />
                {/each}
            </div>
            <h2 class="capitalize font-mono text-2xl">{data.name}</h2>
        </section>

        <section class=" px-5 py-4 flex flex-col">
            <h2 class="capitalize font-mono text-xl underline">Base Stats</h2>
            <div>
                {#each data.stats as stat}
                    <StatBar stat_name={stat.stat.name} value={stat.base_stat} />
                {/each}
                <!-- should probably add the stat total in here -->
            </div>
        </section>

        <!-- <section>
            {#each example.moves as move}
                <div>{move.move.name}</div>
                {move.version_group_details[move.version_group_details.length - 1].level_learned_at}
            {/each}

        </section> -->
    </main>
</div>