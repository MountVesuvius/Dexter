<script>
    // import pokeData from "$lib/pokeData.json";
    import pokeData from "$lib/sample_data.json";

    import PokemonListing from "$lib/components/pokemon_listing.svelte";
</script>

<div class="h-screen flex flex-col">
    <header class="bg-dexter">
        <div class="h-16 w-full text-white">
            this is header content
        </div>
    </header>
    <main class="flex-grow overflow-auto">
        {#each pokeData as pokemon}
            <!-- <a href={"https://pokeapi.co/api/v2/pokemon/" + pokemon.identifier}> -->
            <a href={"/pokemon/" + pokemon.identifier}>
                <PokemonListing name={pokemon.identifier} types={pokemon.types} />
            </a>
        {/each}
    </main>
</div>