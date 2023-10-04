<script>
    import Types from "./types.svelte";
    export let name = "MissingNo.";
    export let types = ['flying', 'normal'];
    export let id = 1;
</script>

<div class="w-full h-16 flex justify-between items-center p-2 border-b">
    <div class="flex justify-center text-center items-center space-x-2">
        <!-- <div class="h-8 w-8 border border-black border-dashed rounded-full"/> -->
        <img class="h-14 w-14" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png" alt="">
        <span class="capitalize">{name}</span>
    </div>
    <div class="flex">
        {#each types as type}
            <Types type={type}/>
        {/each}
    </div>
</div>