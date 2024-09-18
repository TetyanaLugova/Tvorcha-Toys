import { VscMenu } from "react-icons/vsc";
import css from './Menu.module.css';

export default function Menu() {
  
  return (
    <div className={css.menuWrap}>
      <button className={css.menuButton} >
      <VscMenu className={css.icon} />
      </button>

      
        <ul className={css.list}>
          <li className={css.item}>
            <a href="#about-me">Про мене</a>
          </li>
          <li className={css.item}>
            <a href="#gallery">Галерея</a>
          </li>
          <li className={css.item}>
            <a href="#master-class">МК</a>
          </li>
          <li className={css.item}>
            <a href="#reviews">Відгуки</a>
          </li>
        </ul>
    </div>
  );
}
