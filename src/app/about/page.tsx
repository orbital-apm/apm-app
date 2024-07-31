import AboutComponent from '@/components/about/About';
import { aboutUsContent } from '@/data/aboutContentData';
import ContactForm from '@/components/contactForm/ContactForm';

const About = () => {
  return (
    <main>
      <AboutComponent content={aboutUsContent} />
      <hr></hr>
      <ContactForm />
    </main>
  );
};

export default About;
