import GuideComponent from '@/components/guide/Guide';
import { guidesContentData } from '@/data/guidesContentData';
import { redirect } from 'next/navigation';

const Guide = ({ params }: { params: { guideKey: string } }) => {
  if (!(params.guideKey in guidesContentData)) {
    return redirect('/guides');
  }

  return (
    <main>
      <GuideComponent guidesContent={guidesContentData[params.guideKey]} />
    </main>
  );
};

export default Guide;
