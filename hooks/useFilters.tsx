import { create } from 'zustand';
import { iFilterState } from '@/types/filters-state';
import { getStaticVehicles } from '@/api/staticCarManufacturer';
import { iModel } from '@/types/model';

export const useFilter = create<iFilterState>((set) => ({
  loading: true,
  fetchError: false,
  modelId: null,
  yearCar: null,
  modelsList: [],

  fetchCarMakes: async () => {
    try {
      const response = await getStaticVehicles();

      const data = response.Results.map<iModel>((item) => ({
        id: item.MakeId,
        name: item.MakeName,
      }));

      const modelsList = data.sort((a: any, b: any) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      
      set({ modelsList });
      set({ loading: false });
    } catch (err: any) {
      set({ fetchError: err.message });
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
  setModelId: (modelId: string | null) => set({ modelId }),
  setModelYear: (yearCar: string | null) => set({ yearCar }),
}));
