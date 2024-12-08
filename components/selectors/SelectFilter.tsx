'use client';
import { iSelectElement } from '@/types/selectElement';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
export default function SelectElement({ headerText, options, onSelect  }: iSelectElement) {
 
  return (
    <div className="w-auto p-4 lg:w-[300px]">
      <h1 className="mb-4 w-auto text-2xl font-bold lg:w-[300px]">
        {headerText}
      </h1>
      <div className="gap-4">
        <Select onValueChange={(value) => onSelect(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Choose Car" />
          </SelectTrigger>

          <SelectContent>
            {options.map((item) => (
              <div
                key={item.id}
                className="m-2 hover:font-bold hover:shadow-md"
              >
                <SelectItem value={item.id.toString()}>
                  {item.name}
                </SelectItem>
              </div>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
