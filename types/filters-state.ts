import { iModel } from '@/types/model';
export interface iFilterState {
  loading: boolean;
  fetchError: boolean;
  modelId: string | null;
  yearCar: string | null;
  modelsList: iModel[];
  fetchCarMakes: () => Promise<void>;
  setModelId: (modelId: string | null) => void;
  setModelYear: (yearCar: string | null) => void;
}
