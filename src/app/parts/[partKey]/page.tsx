import PartComponent from '@/components/parts/part/Part';

const Part = ({ params }: { params: { partKey: string } }) => {
  return (
    <main>
      <PartComponent />
    </main>
  );
};

export default Part;
