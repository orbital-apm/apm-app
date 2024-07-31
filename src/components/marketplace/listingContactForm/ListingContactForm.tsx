'use client';

import { useState } from 'react';
import axios from 'axios';

import styles from './ListingContactForm.module.scss';
import Button from '@/components/ui/form/button/Button';
import FormTab from '@/components/ui/form/formTabs/formTab/FormTab';
import Input from '@/components/ui/form/input/Input';

const ListingContactForm = ({ sellerId, listingTitle, listingLink }: ListingContactFormProps) => {
  const [senderEmail, setEmail] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const sellerEmail = (
        await axios.get(`${process.env.NEXT_PUBLIC_APM_SERVICE_BASE_URL}/v1/users/${sellerId}/email`)
      ).data;
      const response = await fetch('/api/listings_contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sellerEmail,
          senderEmail,
          listingTitle,
          listingLink,
          enquiry,
          message
        })
      });
      const data = await response.json();
      if (data.success) {
        alert('Message sent successfully!');
        setEmail('');
        setEnquiry('');
        setMessage('');
        console.log('Received data:', { enquiry, message });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.listingFormContainer}>
      <h2>listings inquiry.</h2>
      <p className='mb-6'>Ask about the listing through this form!</p>
      <FormTab redirectPath='/about' text='Contact Form' selected={true} />
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <Input
          id='email'
          type='email'
          placeholder='Your email'
          required={true}
          value={senderEmail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          id='enquiry'
          type='text'
          placeholder='Your enquiry'
          required={true}
          value={enquiry}
          onChange={e => setEnquiry(e.target.value)}
        />
        <Input
          id='message'
          type='text'
          placeholder='Your message'
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <div className={styles.submitContainer}>
          <Button type='submit' text={isSubmitting ? 'Sending...' : 'Submit'} />
        </div>
      </form>
    </div>
  );
};

interface ListingContactFormProps {
  sellerId: string;
  listingTitle: string;
  listingLink: string;
}

export default ListingContactForm;
