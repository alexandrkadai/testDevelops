'use client';
import { Suspense, useState } from 'react';

import CarsSelect from '@/components/selectors/CarSelect';

import YearSelect from '@/components/selectors/YearSelect';

import { Button } from '@/components/ui/button';

import Link from 'next/link';

import { Loader2 } from 'lucide-react';

export default function Home() {
  const [carMaker, setCarMaker] = useState<string>('');
  const [yearCar, setYearCar] = useState<string>('');

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center">
      <Suspense
        fallback={
          <>
            <Loader2 size={24} className="animate-spin" />
            Loading ...
          </>
        }>
        <CarsSelect setCarMaker={setCarMaker} />
      </Suspense>
      <YearSelect setYearCar={setYearCar} />
      <div className="flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-4">Proceed</h2>
        {carMaker && yearCar ? (
          <Button asChild>
            <Link href={`/result/${carMaker}/${yearCar}`}>Next</Link>
          </Button>
        ) : (
          <Button disabled>Next</Button>
        )}
      </div>
    </div>
  );
}
