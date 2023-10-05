<script>
    // import pokeData from "$lib/pokeData.json";
    import pokeData from "$lib/sample_data.json";

    import PokemonListing from "$lib/components/pokemon_listing.svelte";

    import Fuse from 'fuse.js';

    let searchTerm = "";
    let filteredData = pokeData;

    // Options for Fuse.js
    const options = {
        keys: ['identifier'],
        // keys: ['types'],
        threshold: 0.2,  // Adjust for stricter or looser matches
    };

    const fuse = new Fuse(pokeData, options);

    function filterData() {
        if (searchTerm.trim() === "") {
            filteredData = pokeData;
        } else {
            const results = fuse.search(searchTerm);
            filteredData = results.map(result => result.item);
        }
    }
</script>

<div class="h-screen flex flex-col">
    <header class="">
        <div class="bg-dexter h-16 w-full text-white text-center flex justify-center items-center">
            <span class="capitalize font-mono">All Pokemon</span>
        </div>
        <div class="p-2">
            <input class="bg-gray-200 py-1 px-3 rounded-lg w-full focus:outline-none" bind:value={searchTerm} on:input={filterData} placeholder="Search" />
        </div>
    </header>
    <main class="flex-grow overflow-auto">
        {#each filteredData as pokemon}
            <a href={"/pokemon/" + pokemon.id}>
                <PokemonListing id={pokemon.id} name={pokemon.identifier} types={pokemon.types} />
            </a>
        {/each}
    </main>
</div>