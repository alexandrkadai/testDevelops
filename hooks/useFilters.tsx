import { create } from 'zustand';
import { iFilterState } from '@/types/filters-state';
const api = process.env.NEXT_PUBLIC_CAR_SELECT || '';

export const useFilter = create<iFilterState>((set) => ({
  loading: true,
  fetchError: false,
  modelId: null,
  yearCar: null,
  modelsList: [],

  fetchCarMakes: async () => {
    try {
      const response = await fetch(api);

      if (!response.ok) {
        throw new Error('Failed to fetch car makes');
      }

      const data = await response.json();
      const modelsList = data.Results.sort((a: any, b: any) => {
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
