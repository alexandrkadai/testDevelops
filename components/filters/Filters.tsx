'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SelectFilter from '../selectors/SelectFilter';
import { useFilter } from '@/hooks/useFilters';
import { useEffect } from 'react';
import { YearsData } from '@/data/years';

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
      {loading && <h2 className="mb-4 text-2xl font-bold">Loading...</h2>}
      <div className="flex flex-row p-4">
        <SelectFilter
          headerText="Choose Car Maker"
          options={modelsList.map((model) => ({
            id: model.MakeId,
            name: model.MakeName,
          }))}
          onSelect={(value) => setModelId(value as string | null)}
          
        />
        <SelectFilter
        options={YearsData.map((year) => ({
					id: year.name,
					name: year.name,
				}))}
          headerText="Choose Year of Release"
          onSelect={(value) => setModelYear(value as string | null)}
          
        />
        <Link href={`/result/${modelId}/${yearCar}`}>
          <Button
            disabled={modelId && yearCar ? false : true}
            className="w-[100px] items-center justify-center mt-16"
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}
