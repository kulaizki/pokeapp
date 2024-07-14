export interface Type {
  name: string;
}

export interface PokemonType {
  type: Type;
}

export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[];
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  stats: Stat[];
}
