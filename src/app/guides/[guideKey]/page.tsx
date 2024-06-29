import GuideComponent from '@/components/guide/Guide';
import { guidesContentData } from '@/data/guidesContentData';

const Guide = ({ params }: { params: { guideKey: string } }) => {
  return (
    <main>
      <GuideComponent guidesContent={guidesContentData[params.guideKey]} />
    </main>
  );
};

export default Guide;
