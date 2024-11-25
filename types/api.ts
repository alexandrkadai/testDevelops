export interface ModelsResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: ModelResponse[];
}

export interface ModelResponse {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}
