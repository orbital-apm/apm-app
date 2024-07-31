'use client';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import styles from './ListingDetails.module.scss';
import ListingContactForm from '@/components/marketplace/listingContactForm/ListingContactForm';

const conditionMapping: Record<number, string> = {
  5: 'brand new',
  4: 'like new',
  3: 'lightly used',
  2: 'well used',
  1: 'heavily used'
};

const ListingDetails = ({ listingId }: ListingDetailsProps) => {
  const { data } = useQuery<ListingResponse>({
    queryKey: ['listing'],
    queryFn: async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_APM_SERVICE_BASE_URL}/v1/listings/${listingId}`);
      return response.data;
    }
  });

  return (
    <div className={styles.detailsContainer}>
      <span className={styles.detailLabel}>title</span>
      <span>{data?.title}</span>
      <span className={styles.detailLabel}>description</span>
      <span>{data?.description}</span>
      <span className={styles.detailLabel}>condition</span>
      <span>{conditionMapping[data?.condition || 0]}</span>
      <span className={styles.detailLabel}>part type</span>
      {data?.part_type && data.part_type.length > 0 ? (
        <ul>
          {data.part_type.map(part => (
            <li key={part}>{part}</li>
          ))}
        </ul>
      ) : (
        <span>nil</span>
      )}
      <span className={styles.detailLabel}>price</span>
      <span>${data?.price}</span>

      <hr />

      {data?.id && data?.user_id && data?.title && (
        <ListingContactForm sellerId={data.user_id} listingTitle={data.title} listingLink='/' />
      )}
    </div>
  );
};

interface ListingResponse {
  id: string;
  title: string;
  description: string;
  condition: number;
  part_type: string[];
  price: number;
  user_id: string;
}

interface ListingDetailsProps {
  listingId: string;
}

export default ListingDetails;
