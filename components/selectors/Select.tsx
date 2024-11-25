'use client';
import { useState, useEffect } from 'react';
import { iSelectElement } from '@/types/selectElement';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';


export default function SelectElement({headerText} : iSelectElement) {
    
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
  )
}
