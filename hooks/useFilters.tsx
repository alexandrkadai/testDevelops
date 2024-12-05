import { create } from 'zustand';
import { iFilterState } from '@/types/filters-state';
import { getStaticVehicles } from '@/api/staticCarManufacturer';


export const useFilter = create<iFilterState>((set) => ({
  loading: true,
  fetchError: false,
  modelId: null,
  yearCar: null,
  modelsList: [],

  fetchCarMakes: async () => {
    try {
      const response = await getStaticVehicles();


      
      const data = response.Results.map((model) => ({
        MakeId: model.MakeId,
        MakeName: model.MakeName,
      }));
      
      const modelsList = data.sort((a: any, b: any) => {
        const nameA = a.MakeName.toUpperCase();
        const nameB = b.MakeName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      console.log(modelsList);
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
