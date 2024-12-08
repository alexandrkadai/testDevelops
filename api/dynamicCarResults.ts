'use server';
import { iDynamicModelsResponse } from '@/types/apiDynamic';
import { api } from './index';


export const getDynamicVehicles = async (modelId: number, yearCar: number) => {
  try {
    const { data } = await api.get<iDynamicModelsResponse>(
      `/vehicles/GetModelsForMakeIdYear/makeId/${modelId}/modelyear/${yearCar}`,
      {
        params: { format: 'json' },
      }
    );
    
    console.log(data.Message)

    if (!data || !data.Results) {
      return {
        vehicles: [],
        error: true,
      };
    }

    
    return { vehicles: data.Results, error: false };

  } catch (error) {
    console.error('Failed to get data from the server', error);
    return {
      error: true,
      vehicles: [],
    };
  }
};
