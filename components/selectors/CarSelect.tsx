'use client';
import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface iCarMake {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}
interface iSelectCar {
  setCarMaker: (value: string) => void;
}

const CarsSelect = ({ setCarMaker }: iSelectCar) => {
  const [makes, setMakes] = useState<iCarMake[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = process.env.NEXT_PUBLIC_CAR_SELECT || '';

  useEffect(() => {
    const fetchCarMakes = async () => {
      try {
        const response = await fetch(api);

        if (!response.ok) {
          throw new Error('Failed to fetch car makes');
        }

        const data = await response.json();
        const dataSorted = data.Results.sort((a: any, b: any) => {
          const nameA = a.MakeName.toUpperCase();
          const nameB = b.MakeName.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        });
        setMakes(dataSorted);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchCarMakes();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (isLoading) {
    return <div className="">Loading ....</div>;
  }

  return (
    <div className="w-auto p-4 lg:w-[300px]">
      <h1 className="mb-4 w-auto text-2xl font-bold lg:w-[300px]">
        Select Car Manufacture
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
};

export default CarsSelect;
