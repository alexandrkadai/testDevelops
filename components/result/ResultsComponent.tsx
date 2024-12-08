import { getDynamicVehicles } from '@/api/dynamicCarResults';
import { iParam } from '@/types/paramStatic';

const ResultsComponent = async ({ modelId, yearCar }: iParam) => {
  const { vehicles, error } = await getDynamicVehicles(modelId, yearCar);

  console.log(vehicles, 'This is ' + error);

  return (
    <>
      <h2 className="text-2xl font-bold">Results</h2>
      {!vehicles.length && (
        <div className="text-2xl">Wainting</div>
      )}
      {vehicles.length && (
        <div>
          {vehicles.map((item) => (
            <div
              key={item.Make_ID}
              className="mt-10 flex justify-between rounded-md border-2 border-black p-2 font-bold uppercase sm:w-auto lg:mx-0 lg:w-[400px]"
            >
              <span className="mx-3">{item.Make_Name}</span>
              <span className="mx-3">{item.Model_Name}</span>
              <span className="mx-3">{item.Model_ID}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ResultsComponent;
