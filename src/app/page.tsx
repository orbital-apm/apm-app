// import styles from './home.module.scss';
import Cart from '@/assets/images/shopping-cart.svg';
import User from '@/assets/images/user.svg';
import ClickableIcon from '@/components/clickableIcon/ClickableIcon';

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <ClickableIcon imgSrc={User} altText='User' linkDest='/user' />
      <ClickableIcon imgSrc={Cart} altText='Cart' linkDest='/cart' />
    </main>
  );
};

export default Home;
