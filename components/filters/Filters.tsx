'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SelectFilter from '../selectors/SelectFilter';
import { useFilter } from '@/hooks/useFilters';
import { useEffect } from 'react';

export default function Filters() {
  const {
    modelId,
    yearCar,
    modelsList,
    loading,
    fetchError,
    fetchCarMakes,
    setModelId,
    setModelYear,
  } = useFilter();

  useEffect(() => {
    fetchCarMakes();
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center lg:flex-row">
      <div className="flex flex-col p-4">
        <h2 className="mb-4 text-2xl font-bold">Proceed</h2>
        <SelectFilter headerText="Choose Car Maker" options={modelsList}/>
        <SelectFilter headerText="Choose Year of Release" options={}/>
        <Link href={`/result/${modelId}/${yearCar}`}>
          <Button
            disabled={modelId && yearCar ? false : true}
            className="w-full"
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}
