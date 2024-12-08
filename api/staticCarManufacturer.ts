import { api } from './index';
import { ModelsResponse } from '@/types/api';

export const getStaticVehicles = async () => {
  const { data } = await api.get<ModelsResponse>(
    '/vehicles/GetMakesForVehicleType/car',
    {
      params: { format: 'json' },
    }
  );
  console.log(data);
  return data;
};
