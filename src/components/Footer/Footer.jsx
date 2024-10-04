import css from './Footer.module.css';
import Logo from '../Logo/Logo';
import { FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { IoShieldCheckmark } from 'react-icons/io5';

export default function Footer() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.wrapTitle}>
          <p className={css.logo}>
            tvorcha.<span className={css.span}>toys</span>
          </p>
          <div className={css.wrapInfo}>
            <p className={css.textInfo}>Працюю офіційно</p>
            <IoShieldCheckmark className={css.iconInfo} />
          </div>
          <p className={css.text}> ФОП Семенюк Валентина Іллівна</p>
          <p className={css.text}>ЄДРПОУ 11111111</p>
        </div>
        <div className={css.wrapContact}>
          <p className={css.textInfo}>Контакти</p>
          <div>
            <a className={css.email} href="valentina.shveda54@gmail.com">
              valentina.shveda54@gmail.com
            </a>
          </div>
          <div className={css.wrapIcon}>
            <a href="https://t.me/valentinashveda">
              <FaTelegram className={css.icon} />
            </a>
            <a href="https://www.instagram.com/tvorcha.toys?igsh=Mmtocm1haG50Njdh&utm_source=qr">
              <FaInstagram className={css.icon} />
            </a>
          </div>
        </div>
        {/* <div className={css.wrapAutor}>
        <p>Сайт створила</p>
        <a href="Lugovatanya1503@gmail.com">Lugovatanya1503@gmail.com</a>
      </div> */}
      </div>
    </div>
  );
}
