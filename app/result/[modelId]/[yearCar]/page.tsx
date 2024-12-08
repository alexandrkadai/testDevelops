import ResultsComponent from '@/components/result/ResultsComponent';
import { Button } from '@/components/ui/button';
import { ChevronLeftCircle } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import { iParam } from '@/types/paramStatic';

export async function generateStaticParams() {
  const years = ['2020', '2021', '2022', '2023'];
  const makeIds = ['440', '475', '582', '452'];

  const params = [];

  for (const makeId of makeIds) {
    for (const year of years) {
      params.push({
        modelId: makeId,  // Changed from makeId to modelId
        yearCar: year,    // Changed from year to yearCar
      });
    }
  }

  return params;
}

const ResultPage = async ({
  params,
} : {
  params: Promise<iParam>; 
}) => {
  const { modelId, yearCar } = await params;  

  return (
    <Suspense fallback={<div className='text-2xl font-bold text-center'>Loading...</div>}>
      <div className="relative mt-10 flex w-full flex-col items-center justify-center lg:mt-0">
        <div className="flex flex-row gap-4 text-2xl font-bold uppercase"></div>
        <ResultsComponent modelId={+modelId} yearCar={+yearCar} />
        <Button
          asChild
          className="absolute left-1 top-0 uppercase lg:left-5 xl:left-[25%]"
        >
          <Link href="/">
            <ChevronLeftCircle size={24} />
            Go home
          </Link>
        </Button>
      </div>
    </Suspense>
  );
};

export default ResultPage;