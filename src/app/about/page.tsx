import AboutComponent from '@/components/about/About';
import { aboutUsContent } from '@/data/aboutContentData';
import 

const About = () => {
  return (
    <main>
      <AboutComponent content={aboutUsContent} />
    </main>
  );
};

export default About;
