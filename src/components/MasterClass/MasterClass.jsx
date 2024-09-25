import css from './MasterClass.module.css';

export default function MasterClass() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Майстеркласи</h2>
      <p className={css.text}>Створивши одну, Ви обов'язково захочете ще...</p>
      <ul className={css.list}>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Корівка_Му-min.jpg"
            alt="Корівка"
            width="284px"
            height="260px"
            loading="lazy"
          />
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Кроличка-min.jpg"
            alt="Зайчик"
            width="284px"
            height="260px"
            loading="lazy"
          />
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Корівка_з_бомбонами-min.jpg"
            alt="Корівка з бомбонами"
            width="284px"
            height="260px"
            loading="lazy"
          />
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Пряничка-min.jpg"
            alt="Пряник"
            width="284px"
            height="260px"
            loading="lazy"
          />
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Панда-min.jpg"
            alt="Панда"
            width="284px"
            height="260px"
            loading="lazy"
          />
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Курчатко-min.JPG"
            alt="Курча"
            width="284px"
            height="260px"
            loading="lazy"
          />
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Мишка_Мія-min.jpg"
            alt="Мишка"
            width="284px"
            height="260px"
            loading="lazy"
          />
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Зефірка-min.jpg"
            alt="Єдиноріжка"
            width="284px"
            height="260px"
            loading="lazy"
          />
        </li>
      </ul>
    </div>
  );
}
