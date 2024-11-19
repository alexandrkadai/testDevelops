'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { YearsData } from '@/data/years';
import { iYearType } from '@/data/years';

interface iSelectYear {
  setYearCar: (value: string) => void;
}

export default function YearSelect({ setYearCar }: iSelectYear) {
  return (
    <div className="p-4">
      <h1 className="text-2xl w-full lg:w-[300px] font-bold mb-4">Select Year of Car</h1>
      <div className="grid gap-4">
        <Select onValueChange={(value) => setYearCar(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Choose Year" />
          </SelectTrigger>

          <SelectContent>
            {YearsData.map((year: iYearType) => (
              <div key={year.id} className="p-4 shadow hover:shadow-md">
                <SelectItem value={year.year}>{year.year}</SelectItem>
              </div>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
