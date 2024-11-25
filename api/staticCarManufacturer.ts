import { api } from './index';
import { ModelResponse } from '@/types/api';
export const getStaticVehicles = async () => {
  const { data } = await api.get<ModelResponse>(
    'vehicles/GetMakesForVehicleType/car',
    {
      params: { format: 'json' },
    }
  );
  return data;
};
