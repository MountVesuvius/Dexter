import type { PageLoad } from './$types';

export const load = async ({ params }) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`);
  if (!response.ok) {
    return { status: response.status, error: new Error(`Could not load Pokemon ${params.pokemonId}`) };
  }
  const pokemon_data = await response.json();

  // Stat Total
  let stat_total = 0;
  pokemon_data.stats.forEach(element => {
    stat_total += element.base_stat;
  });

  // Fetch all abilities data
  const abilitiesPromises = pokemon_data.abilities.map(async (element) => {
    const abilityResponse = await fetch(element.ability.url);
    if (!abilityResponse.ok) {
      throw new Error(`Failed to fetch ability data for ${element.ability.name}`);
    }
    return await abilityResponse.json();
  });
  const abilities_data = await Promise.all(abilitiesPromises);

  const ability_output = abilities_data.map((element) => {
    // Filter the effect_entries array for the entry where the language is English
    const englishEffectEntry = element.effect_entries.filter(entry => entry.language.name === 'en')[0];
    return {
      name: element.name,
      effect: englishEffectEntry ? englishEffectEntry.effect : 'No English description available',
      short_effect: englishEffectEntry ? englishEffectEntry.short_effect : 'No English description available'
    };
  })

  // Species data
  const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.pokemonId}`);
  if (!speciesResponse.ok) {
    return { status: speciesResponse.status, error: new Error(`Could not load Pokemon ${params.pokemonId}`) };
  }
  const species_data = await speciesResponse.json();

  return {
    id: pokemon_data.id,
    name: pokemon_data.name,
    height: pokemon_data.height,
    weight: pokemon_data.weight,
    types: pokemon_data.types,
    stats: pokemon_data.stats,
    stat_total: stat_total,
    species: pokemon_data.species,
    moves: pokemon_data.moves,
    location: "Currently not implemented",
    abilities: ability_output,
    sprites: pokemon_data.sprites,
    gender: species_data.gender_rate, // this provides the `n` in n/8
    capture_rate: species_data.capture_rate, // max is 255
    happiness: species_data.base_happiness, // max is 255
    egg_groups: species_data.egg_groups,
    evolutions: species_data.evolution_chain,
    generation: species_data.generation,
    color: species_data.color,
  }
};
