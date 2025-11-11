import Image from 'next/image';

// Define an interface for our planet data
interface Planet {
  name: string;
  description: string;
  imageSrc: string;
}

// Data for the planets
let planets: Planet[] = [
  {
    name: 'Mercury',
    description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth\'s Moon.',
    imageSrc: '/Mercury.png',
  },
  {
    name: 'Venus',
    description: 'Venus spins slowly in the opposite direction from most planets. It\'s a terrestrial planet and is sometimes called Earth’s "sister planet".',
    imageSrc: '/Venus.png',
  },
  {
    name: 'Earth',
    description: 'Our home planet is the only place we know of so far that’s inhabited by living things. It\'s also the only planet in our solar system with liquid water on the surface.',
    imageSrc: '/Earth.png',
  },
  {
    name: 'Mars',
    description: 'Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—a wet and warm planet.',
    imageSrc: '/Mars.png',
  },
    {
    name: 'Jupiter',
    description: 'Jupiter is more than twice as massive as all the other planets combined. The giant planet\'s Great Red Spot is a centuries-old storm bigger than Earth.',
    imageSrc: '/Jupiter.png',
  },
  {
    name: 'Saturn',
    description: 'Adorned with thousands of beautiful ringlets, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn\'s.',
    imageSrc: '/Saturn.png',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-gray-900 text-gray-900 dark:text-zinc-50 p-8 sm:p-16">
      <main className="flex w-full max-w-5xl flex-col items-center gap-12">
        <header className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
            Explore Our Solar System
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Welcome to a journey through our cosmic neighborhood. Learn more about the amazing planets that orbit our Sun.
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {planets.map((planet) => (
            <div
              key={planet.name}
              className="flex flex-col items-center gap-4 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src={planet.imageSrc}
                alt={`Image of ${planet.name}`}
                width={450} // Set your desired image width
                height={200} // Set your desired image height
                priority={planet.name === 'Earth'} // Prioritize loading Earth's image
              />
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-blue-800 dark:text-blue-300">
                  {planet.name}
                </h2>
                <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {planet.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-16 text-center text-zinc-500 dark:text-zinc-400">
        <p>Data and images courtesy of NASA (placeholder).</p>
      </footer>
    </div>
  );
}