import PartComponent from '@/components/parts/part/Part';
import { partsConfig } from '@/data/partsConfig';
import { redirect } from 'next/navigation';

const Part = ({ params }: { params: { partKey: string } }) => {
  if (!(params.partKey in partsConfig)) {
    return redirect('/guides');
  }

  return (
    <main>
      <PartComponent partConfig={partsConfig[params.partKey]} />
    </main>
  );
};

export default Part;
