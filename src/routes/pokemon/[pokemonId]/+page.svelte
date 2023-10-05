<script>
    import {page} from '$app/stores';
    import { onMount } from 'svelte';
    const pokemonId = $page.params.pokemonId;

    // import data from '$lib/exampleMon.json';
    import Types from '$lib/components/types.svelte';
    import StatBar from '$lib/components/stat_bar.svelte';
    import AbilityListing from '$lib/components/ability_listing.svelte';

    export let data;
</script>



<div class="h-screen flex flex-col">
    <header class="bg-dexter h-16 w-full text-white flex justify-start items-center px-3">
        <a href="/">
            <img src="/icons/arrow-left.svg" alt="back" class="filter invert">
        </a>
        <!-- <span class="capitalize justify-self-center font-mono">All Pokemon</span> -->
    </header>

    <main class="flex-grow overflow-auto px-6">
        <section class="flex justify-center items-center p-4">
            <img class="h-48 w-48" src={data.sprites.other['official-artwork'].front_default} alt={data.name + ' Sprite'}>
        </section>

        <section class="flex flex-col items-center justify-center mb-2">
            <div class="flex">
                {#each data.types as type}
                    <Types type={type.type.name} />
                {/each}
            </div>
            <h2 class="capitalize font-mono text-2xl">{data.name}</h2>
        </section>

        <section class="font-mono">
            <h3 class="capitalize">Generation: {data.generation.name}</h3>
            <div class="flex">
                <h3>Egg Group:</h3>
                {#each data.egg_groups as egg}
                    <span class="capitalize">&nbsp;{egg.name}</span>
                {/each}
            </div>
            <h3>Capture Rate: {data.capture_rate}</h3>
            <!-- <h3>EV Yield: not currently available</h3> -->
            <div class="flex space-x-1 items-center">
                <h3>Gender Rate:</h3>
                <div class="flex flex-col">
                    <span class="text-blue-500">{(1 - data.gender/8)*100}% Male</span>
                    <span class="text-pink-500">{(data.gender/8)*100}% Female</span>
                </div>
            </div>
        </section>

        <section class="py-4 flex flex-col">
            <!-- <h2 class="capitalize font-mono text-xl underline">Base Stats</h2> -->
            <div>
                {#each data.stats as stat}
                    <StatBar stat_name={stat.stat.name} value={stat.base_stat} />
                {/each}
                <h3 class="font-mono">Total: {data.stat_total}</h3>
            </div>
        </section>

        <section class=" space-y-2">
            {#each data.abilities as ability}
                <AbilityListing name={ability.name} effect={ability.short_effect} />
            {/each}
        </section>

        <section>
            <!-- <AbilityListing/> -->
        </section>
    </main>
</div>