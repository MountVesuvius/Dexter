<script>
    export let type = 'normal';

</script>

<div class="w-20 h-8 {type} m-1 text-white text-sm flex justify-center text-center items-center rounded-lg uppercase font-bold">
    <span>{type}</span>
</div>

<style>
    /* I had chatgpt write these all out cause i'm lazy */
    .normal {
        background-color: theme('colors.normal');
    }

    .fighting {
        background-color: theme('colors.fighting');
    }

    .flying {
        background-color: theme('colors.flying');
    }

    .poison {
        background-color: theme('colors.poison');
    }

    .ground {
        background-color: theme('colors.ground');
    }

    .rock {
        background-color: theme('colors.rock');
    }

    .bug {
        background-color: theme('colors.bug');
    }

    .ghost {
        background-color: theme('colors.ghost');
    }

    .steel {
        background-color: theme('colors.steel');
    }

    .fire {
        background-color: theme('colors.fire');
    }

    .water {
        background-color: theme('colors.water');
    }

    .grass {
        background-color: theme('colors.grass');
    }

    .electric {
        background-color: theme('colors.electric');
    }

    .psychic {
        background-color: theme('colors.psychic');
    }

    .ice {
        background-color: theme('colors.ice');
    }

    .dragon {
        background-color: theme('colors.dragon');
    }

    .dark {
        background-color: theme('colors.dark');
    }

    .fairy {
        background-color: theme('colors.fairy');
    }

</style>