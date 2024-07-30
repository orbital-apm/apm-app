'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import styles from './ListingForm.module.scss';
import Input from '@/components/ui/form/input/Input';
import Button from '@/components/ui/form/button/Button';
import Textarea from '@/components/ui/form/textarea/Textarea';
import Select from '@/components/ui/form/select/Select';
import Checkboxes from '@/components/ui/form/checkboxes/Checkboxes';
import FormTab from '@/components/ui/form/formTabs/formTab/FormTab';
import Cookies from 'js-cookie';

const conditions: [string, number][] = [
  ['brand new', 5],
  ['like new', 4],
  ['lightly used', 3],
  ['well used', 2],
  ['heavily used', 1]
];

const partTypeOptions = [
  {
    value: 'keycaps',
    label: 'keycaps'
  },
  {
    value: 'switches',
    label: 'swithces'
  },
  {
    value: 'kits',
    label: 'kits'
  },
  {
    value: 'accessories',
    label: 'accessories'
  }
];

const ListingForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [partTypes, setPartTypes] = useState<string[]>([]);

  const mutation = useMutation({
    mutationFn: (data: RequestPayload) => {
      return axios.post(`${process.env.NEXT_PUBLIC_APM_SERVICE_BASE_URL}/v1/listings`, data, {
        headers: { Authorization: Cookies.get('authToken') }
      });
    },

    onSuccess: () => {
      router.back();
    },

    onError: error => {
      setErrorMessage('Listing creation unsuccessful.');
      console.log(`Listing creation failed: ${error}`);
    }
  });

  const handleSubmit = (event: React.FormEvent<CreateListingFormElement>) => {
    event.preventDefault();

    const formData = event.currentTarget.elements;

    const requestPayload: RequestPayload = {
      title: formData.title.value,
      description: formData.description.value,
      condition: parseInt(formData.condition.value, 10),
      part_type: partTypes,
      price: parseFloat(formData.price.value.replace('$', ''))
    };

    mutation.mutate(requestPayload);
  };

  return (
    <form className={styles.listingFormContainer} onSubmit={handleSubmit}>
      <FormTab redirectPath='/marketplace/listings/new' text='create listing' selected={true} />

      <div className={styles.formSection}>
        <span>title</span>
        <Input id='title' type='text' placeholder='title' required={true} />
      </div>

      <div className={styles.formSection}>
        <span>description</span>
        <Textarea id='description' rows={5} placeholder='description' required={true} />
      </div>

      <div className={styles.formSection}>
        <span>condition</span>
        <Select id='condition' required={true} options={conditions} />
      </div>

      <div className={styles.formSection}>
        <span>part types</span>
        <Checkboxes options={partTypeOptions} selectedValues={partTypes} onChange={setPartTypes} />
      </div>

      <div className={styles.formSection}>
        <span>price</span>
        <Input id='price' type='price' placeholder='$1.23' required={true} />
      </div>

      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}

      <Button type='submit' text='create' />
    </form>
  );
};

interface RequestPayload {
  title: string;
  description: string;
  condition: number;
  part_type: string[];
  price: number;
}

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLTextAreaElement;
  condition: HTMLInputElement;
  price: HTMLInputElement;
}

interface CreateListingFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default ListingForm;
