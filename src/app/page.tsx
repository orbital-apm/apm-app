import styles from './Home.module.scss';
import BuildCardImage from '@/assets/images/cards/build-card.png';
import LearnCardImage from '@/assets/images/cards/learn-card.png';
import TradeCardImage from '@/assets/images/cards/trade-card.png';
import LinkCard from '@/components/home/linkCard/LinkCard';

const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.cardsContainer}>
        <LinkCard cardText='build.' imgSrc={BuildCardImage} linkDest='/builder' />
        <LinkCard cardText='learn.' imgSrc={LearnCardImage} linkDest='/guides' />
        <LinkCard cardText='trade.' imgSrc={TradeCardImage} linkDest='' />
      </div>
    </main>
  );
};

export default Home;
