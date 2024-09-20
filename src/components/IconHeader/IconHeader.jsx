import { CiShoppingBasket } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa6';
import { FaPinterest } from 'react-icons/fa6';
import css from './IconHeader.module.css';

export default function IconHeader() {
  return (
    <div className={css.container}>
      <a href="">
        <FaInstagram className={css.icon} />
      </a>
      <a href="">
        <FaPinterest className={css.icon} />
      </a>
      <div>
        <CiShoppingBasket className={css.icon} />
      </div>
    </div>
  );
}
