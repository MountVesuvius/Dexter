<script>
    export let stat_name = "hp";
    export let value = 150;
    const MAX_VALUE = 255;

    function transformKey(key) {
      const keyMap = {
          'attack': 'atk',
          'defense': 'def',
          'special-attack': 'spa',
          'special-defense': 'spd',
          'speed': 'spe'
      };

      return keyMap[key] || key;
  }
</script>

<div class="w-full flex justify-center items-center space-x-2">
    {#if stat_name != 'hp'}
      <span class="uppercase font-mono">{transformKey(stat_name)}</span>
    {:else}
      <span class="uppercase font-mono">&nbsp;{stat_name}</span>
    {/if}
    <div class="bg-gray-200 h-2 w-full">
      <div class="h-2 {transformKey(stat_name)}" style="width: {(value/MAX_VALUE) * 100}%"/>
    </div>
    <span class="w-10 self-start font-mono">{value}</span>
</div>

<style>
  /* find nicer colors later */
  .hp {
    background-color: theme('colors.red.400');
  }

  .atk {
    background-color: theme('colors.yellow.400');
  }

  .def {
    background-color: theme('colors.pink.400');
  }

  .spa {
    background-color: theme('colors.dragon');
  }

  .spd {
    background-color: theme('colors.blue.400');
  }

  .spe {
    background-color: theme('colors.green.400');
  }
</style>
