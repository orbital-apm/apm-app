import PartComponent from '@/components/parts/part/Part';

const Part = ({ params }: { params: { partKey: string } }) => {
  params.partKey;
  return (
    <main>
      <PartComponent />
    </main>
  );
};

export default Part;
