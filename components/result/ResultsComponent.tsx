'use client';

import { useEffect, useState } from 'react';

interface CarMakeResult {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

interface Props {
  makerId: string;
  year: string;
}

const ResultsComponent = ({ makerId, year }: Props) => {
  const [resultCar, setResultCar] = useState<CarMakeResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarMakes = async () => {
      try {
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makerId}/modelyear/${year}?format=json`,
        );

        if (!response.ok) {
          throw new Error('Failed to fetch car makes');
        }

        const data = await response.json();
        setResultCar(data.Results);
        setIsLoading(false);
      } catch (error : any) { setError(error.message);
        setIsLoading(false);
      }
    };

    fetchCarMakes();
  }, []);

  
  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }
  if (isLoading) {
    return <div className="p-4 mt-10">Loading vehicle models...</div>;
  }
  if (!isLoading && resultCar.length === 0) {
    return <div className="p-4">No models found for this Car Manufacturer and in this Year.</div>;
  }

  return (
    <>
      <h2 className="text-2xl font-bold">Results</h2>
      
      {resultCar.map((item) => (
        <div
          key={item.Model_Name}
          className="mt-10 sm:w-auto lg:mx-0 lg:w-[400px] flex border-2 border-black rounded-md p-2 uppercase justify-between font-bold">
          <span className='mx-3'>{item.Make_Name}</span>
          <span className='mx-3'>{item.Model_Name}</span>
          <span className='mx-3'>{item.Model_ID}</span>
        </div>
      ))}
      
    </>
  );
};

export default ResultsComponent;
