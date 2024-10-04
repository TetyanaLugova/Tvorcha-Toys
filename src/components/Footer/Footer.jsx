import css from './Footer.module.css';
import Logo from '../Logo/Logo';
import { FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className={css.container}>
      <div className={css.wrapTitle}>
        <p className={css.logo}>
          tvorcha.<span className={css.span}>toys</span>
        </p>
        <p>ФОП Семенюк Валентина Іллівна</p>
        <p>ЄДРПОУ 11111111</p>
      </div>
      <div>
        <p>Контакти</p>
        <div>
          <p>Email</p>
          <a href="valentina.shveda54@gmail.com">
            valentina.shveda54@gmail.com
          </a>
        </div>
        <div>
          <a href="valentina.shveda54@gmail.com">
            <FaTelegram className={css.icon} />
          </a>
          <a href="valentina.shveda54@gmail.com">
            <FaInstagram className={css.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}
