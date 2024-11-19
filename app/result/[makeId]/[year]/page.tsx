import ResultsComponent from '@/components/result/ResultsComponent';
import { Button } from '@/components/ui/button';
import { ChevronLeftCircle } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

export async function generateStaticParams() {
  const years = ['2020', '2021', '2022', '2023'];
  const makeIds = ['440', '475', '582', '452'];

  const params = [];

  for (const makeId of makeIds) {
    for (const year of years) {
      params.push({
        makeId,
        year,
      });
    }
  }

  return params;
}

export default async function ResultPage({
  params,
}: {
  params: Promise<{ makeId: string; year: string }>;
}) {
  const paramsNew = await params;
  const maker = paramsNew.makeId;
  const year = paramsNew.year;

  return (
    <div className="relative mt-10 flex w-full flex-col items-center justify-center lg:mt-0">
      <div className="flex flex-row gap-4 text-2xl font-bold uppercase"></div>
      <Suspense
        fallback={
          <>
            <Loader2 size={24} className="animate-spin" />
            Loading ...
          </>
        }
      >
        <ResultsComponent makerId={maker} year={year} />
      </Suspense>
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
  );
}
