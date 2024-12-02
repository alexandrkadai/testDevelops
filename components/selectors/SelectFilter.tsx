'use client';

import { iSelectElement } from '@/types/selectElement';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useFilter } from '@/hooks/useFilters';

export default function SelectElement({ headerText }: iSelectElement) {
  const {
    loading,
    fetchError,
    modelId,
    yearCar,
    fetchCarMakes,
    setModelId,
    setModelYear,
  } = useFilter();
  return (
    <div className="w-auto p-4 lg:w-[300px]">
      <h1 className="mb-4 w-auto text-2xl font-bold lg:w-[300px]">
        {headerText}
      </h1>
      <div className="gap-4">
        <Select onValueChange={(value) => setCarMaker(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Choose Car" />
          </SelectTrigger>

          <SelectContent>
            {makes.map((make) => (
              <div
                key={make.MakeId}
                className="m-2 hover:font-bold hover:shadow-md"
              >
                <SelectItem value={make.MakeId.toString()}>
                  {make.MakeName}
                </SelectItem>
              </div>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
