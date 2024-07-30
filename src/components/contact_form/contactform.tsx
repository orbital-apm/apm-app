// components/ContactForm.tsx
'use client';

import { useState } from 'react';
import styles from './Contact.module.scss';
import Button from '@/components/ui/form/button/Button';
import FormTab from '@/components/ui/form/formTabs/formTab/FormTab';
import Input from '@/components/ui/form/input/Input';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, enquiry, message })
      });
      const data = await response.json();
      if (data.success) {
        alert('Message sent successfully!');
        setEmail('');
        setEnquiry('');
        setMessage('');
        console.log('Received data:', { email, enquiry, message });
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
    <div className={`${styles.contactFormContainer} max-w-md mx-auto mt-10 p-6`}>
      <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
      <p className='mb-6'>Feel free to contact us through this form! 😊</p>
      <FormTab redirectPath='/about' text='Contact Form' selected={true} />
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <Input
          id='email'
          type='email'
          placeholder='Your email'
          required={true}
          value={email}
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
        <Button
          type='submit'
          text={isSubmitting ? 'Sending...' : 'Submit'}
          onClickFn={() => {}} // The form's onSubmit will handle this
        />
      </form>
    </div>
  );
};

export default ContactForm;
