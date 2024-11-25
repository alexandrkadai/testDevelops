const api = process.env.NEXT_PUBLIC_CAR_SELECT || '';

export async function fetchCarMakes(){
    try {
      const response = await fetch(api);

      if (!response.ok) {
        throw new Error('Failed to fetch car makes');
      }

      const data = await response.json();
      const dataSorted = data.Results.sort((a: any, b: any) => {
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
      setMakes(dataSorted);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  
}