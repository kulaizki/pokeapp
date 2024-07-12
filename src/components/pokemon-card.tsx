import Image from "next/image";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
  id: number;
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const id = String(pokemon.id).padStart(3, "0");
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex justify-center items-center mx-auto bg-gradient-to-r from-white via-blue-500 to-purple-700 text-white rounded-lg p-4 gap-4 border-2 border-white transition-all duration-300 ease-in-out hover:border-yellow-500 hover:yellow-lg">          <Image src={imageUrl} alt={pokemon.name} width={200} height={200} />
        </div>
        <h2 className="text-4xl md:text-3xl">{pokemon.name}</h2>
      </div>
    </Link>
  );
};

export default PokemonCard;
