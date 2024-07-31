import Modal from '@/components/ui/modal/Modal';
import ListingDetails from '@/components/marketplace/listingDetails/ListingDetails';

const Part = ({ params }: { params: { listingId: string } }) => {
  return (
    <Modal>
      <ListingDetails listingId={params.listingId} />
    </Modal>
  );
};

export default Part;
