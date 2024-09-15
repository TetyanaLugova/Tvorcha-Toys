import css from "./Menu.module.css"

export default function Menu(){
return(
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
        <li className={css.item}>Відгуки</li>
      </ul>
)
}