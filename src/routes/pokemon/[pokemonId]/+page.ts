// src/routes/pokemon/[pokemon_id]/+page.ts
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`);
  if (!response.ok) {
    // Handle the error in some way
    return { status: response.status, error: new Error(`Could not load Pokemon ${params.pokemonId}`) };
  }
  const data = await response.json();
  return data;
//   return {
//     props: {
//         data: data,
// //       pokemon: {
// //         name: data.name,
// //         image: data.sprites.front_default,
// //       },
// //     },
//   };
};
