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
  


  if (error) {
    return <div>Error: {error}</div>;
  }
  if (isLoading) {
    return (
      <div className="w-[300px] border-2">
        <h1 className="mb-4 w-auto text-2xl font-bold lg:w-[300px]">
          Select Car Manufacture
        </h1>
        <span className="">Loading ....</span>
      </div>
    );
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
