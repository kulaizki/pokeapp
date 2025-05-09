import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-2 bg-gray-950 border-t border-gray-600 text-white mt-auto"
    >
      <div className="gap-4 max-w-6xl mx-auto px-6 flex flex-row justify-between items-center">
        <p className="text-sm my-3 text-center md:text-left text-gray-400 flex items-center">
          &copy; {currentYear} 
          <Link
            href="https://fitzsixto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 hover:from-yellow-400 hover:to-yellow-700 transition duration-200 ease-in-out ml-1"
          >
            Fitzsixto 
          </Link>
          . All rights reserved.
        </p>
        <div className="flex space-x-4 md:pt-0 items-center">
          <Link
            href="https://github.com/kulaizki/pokedex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <Image
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub"
              width={40}
              height={40}
              className="transition ease-in-out duration-300 hover:scale-110 hover:opacity-75"
              unoptimized
            />
          </Link>
        </div>
      </div>
    </footer>
  );
} 