import AboutComponent from '@/components/about/About';
import { aboutUsContent } from '@/data/aboutContentData';
import ContactForm from '@/components/contact_form/contactform';

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
