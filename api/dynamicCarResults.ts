import { api } from './index';
import { ModelsResponse } from '@/types/api';

export const getDynamicVehicles = async () => {
  const { data } = await api.get<ModelsResponse>(
    '/vehicles/GetMakesForVehicleType/car',
    {
      params: { format: 'json' },
    }
  );
  
  return data;
};
