export interface iDynamicModelsResponse {
    Count: number;
    Message: string;
    SearchCriteria: string;
    Results:DynamicModelResponse[];
  }
  export interface DynamicModelResponse {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
  }
  
  