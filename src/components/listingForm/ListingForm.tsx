'use client';

import { useState } from 'react';
import axios from 'axios';
import styles from './ListingForm.module.scss';
import Button from '@/components/ui/form/button/Button';
import FormTab from '@/components/ui/form/formTabs/formTab/FormTab';
import Input from '@/components/ui/form/input/Input';

interface ListingFormProps {
    listingId: string;
    sellerId: string;
    listingTitle: string;
    listingLink: string;
  }

const ListingsForm: React.FC<ListingFormProps> = ({ listingId, sellerId, listingTitle, listingLink }) => {
    const [senderEmail, setEmail] = useState('');
    const [enquiry, setEnquiry] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const sellerEmail = await axios.get(`/users/${sellerId}/email`)
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            sellerEmail,
            senderEmail, 
            listingId,
            listingTitle,
            listingLink,
            enquiry, 
            message, })
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
          <Button type='submit' text={isSubmitting ? 'Sending...' : 'Submit'} />
        </form>
      </div>
    );
  };
  
  export default ListingsForm;