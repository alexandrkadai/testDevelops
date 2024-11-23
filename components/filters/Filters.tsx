'use client';
import { Suspense, useState } from 'react';
import CarsSelect from '@/components/selectors/CarSelect';
import YearSelect from '@/components/selectors/YearSelect';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export default function Filters() {
    const [carMaker, setCarMaker] = useState<string>('');
    const [yearCar, setYearCar] = useState<string>('');
  
    return (
      <div className="flex w-full flex-col items-center justify-center lg:flex-row">
        <Suspense
          fallback={
            <div className='w-350 border-2 '>
              <Loader2 size={24} className="animate-spin" />
              Loading ...
            </div>
          }
        >
          <CarsSelect setCarMaker={setCarMaker} />
        </Suspense>
        <YearSelect setYearCar={setYearCar} />
        <div className="flex flex-col p-4">
          <h2 className="mb-4 text-2xl font-bold">Proceed</h2>
  
          <Link href={`/result/${carMaker}/${yearCar}`}>
            <Button
              disabled={carMaker && yearCar ? false : true}
              className="w-full"
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
    );
}
