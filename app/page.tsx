import Filters from '@/components/filters/Filters';

export default function Home() {
  return (
    <>
      <header className='w-full text-center'>
        <h1 className='text-2xl font-bold'>Welcome to the Car Finder App</h1>
      </header>
      <main className='mt-10'>
        <Filters />
      </main>
    </>
  );
}
