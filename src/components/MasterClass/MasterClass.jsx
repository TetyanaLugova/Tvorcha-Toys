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
            width="200px"
            height="180px"
            loading="lazy"
          />
          <div className={css.wrapInfo}>
            <div className={css.wrapText}>
              <p className={css.textMc}>МК "Корівка Му"</p>
              <p className={css.textMc}>150 ₴</p>
            </div>
            <div className={css.wrapBtn}>
              <button className={css.btn}>Детальніше</button>
              <button className={css.btn}>Придбати</button>
            </div>
          </div>
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Кроличка-min.jpg"
            alt="Зайчик"
            width="200px"
            height="180px"
            loading="lazy"
          />
          <div className={css.wrapInfo}>
            <div className={css.wrapText}>
              <p className={css.textMc}>МК "Кроличка"</p>
              <p className={css.textMc}>150 ₴</p>
            </div>
            <div className={css.wrapBtn}>
              <button className={css.btn}>Детальніше</button>
              <button className={css.btn}>Придбати</button>
            </div>
          </div>
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Корівка_з_бомбонами-min.jpg"
            alt="Корівка з бомбонами"
            width="200px"
            height="180px"
            loading="lazy"
          />
          <div className={css.wrapInfo}>
            <div className={css.wrapText}>
              <p className={css.textMc}>МК "Корівка з бомбонами"</p>
              <p className={css.textMc}>150 ₴</p>
            </div>
            <div className={css.wrapBtn}>
              <button className={css.btn}>Детальніше</button>
              <button className={css.btn}>Придбати</button>
            </div>
          </div>
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Пряничка-min.jpg"
            alt="Пряник"
            width="200px"
            height="180px"
            loading="lazy"
          />
          <div className={css.wrapInfo}>
            <div className={css.wrapText}>
              <p className={css.textMc}>МК "Пряничка"</p>
              <p className={css.textMc}>150 ₴</p>
            </div>
            <div className={css.wrapBtn}>
              <button className={css.btn}>Детальніше</button>
              <button className={css.btn}>Придбати</button>
            </div>
          </div>
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Панда-min.jpg"
            alt="Панда"
            width="200px"
            height="180px"
            loading="lazy"
          />
          <div className={css.wrapInfo}>
            <div className={css.wrapText}>
              <p className={css.textMc}>МК "Панда"</p>
              <p className={css.textMc}>150 ₴</p>
            </div>
            <div className={css.wrapBtn}>
              <button className={css.btn}>Детальніше</button>
              <button className={css.btn}>Придбати</button>
            </div>
          </div>
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Курчатко-min.JPG"
            alt="Курча"
            width="200px"
            height="180px"
            loading="lazy"
          />
          <div className={css.wrapInfo}>
            <div className={css.wrapText}>
              <p className={css.textMc}>МК "Курчатко"</p>
              <p className={css.textMc}>150 ₴</p>
            </div>
            <div className={css.wrapBtn}>
              <button className={css.btn}>Детальніше</button>
              <button className={css.btn}>Придбати</button>
            </div>
          </div>
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Мишка_Мія-min.jpg"
            alt="Мишка"
            width="200px"
            height="180px"
            loading="lazy"
          />
          <div className={css.wrapInfo}>
            <div className={css.wrapText}>
              <p className={css.textMc}>МК "Мишка Мія"</p>
              <p className={css.textMc}>150 ₴</p>
            </div>
            <div className={css.wrapBtn}>
              <button className={css.btn}>Детальніше</button>
              <button className={css.btn}>Придбати</button>
            </div>
          </div>
        </li>
        <li className={css.item}>
          <img
            className={css.img}
            src="/public/img/Зефірка-min.jpg"
            alt="Єдиноріжка"
            width="200px"
            height="180px"
            loading="lazy"
          />
          <div className={css.wrapInfo}>
            <div className={css.wrapText}>
              <p className={css.textMc}>МК "Зефірка"</p>
              <p className={css.textMc}>150 ₴</p>
            </div>
            <div className={css.wrapBtn}>
              <button className={css.btn}>Детальніше</button>
              <button className={css.btn}>Придбати</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
