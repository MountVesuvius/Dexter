<script>
    // import pokeData from "$lib/pokeData.json";
    import pokeData from "$lib/sample_data.json";

    import PokemonListing from "$lib/components/pokemon_listing.svelte";
</script>

<div class="h-screen flex flex-col">
    <header class="bg-dexter">
        <div class="h-16 w-full text-white text-center flex justify-center items-center">
            <span class="capitalize font-mono">All Pokemon</span>
        </div>
    </header>
    <main class="flex-grow overflow-auto">
        {#each pokeData as pokemon}
            <!-- <a href={"https://pokeapi.co/api/v2/pokemon/" + pokemon.identifier}> -->
            <a href={"/pokemon/" + pokemon.id}>
                <PokemonListing id={pokemon.id} name={pokemon.identifier} types={pokemon.types} />
            </a>
        {/each}
    </main>
</div>