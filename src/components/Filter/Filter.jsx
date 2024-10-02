import css from './Filter.module.css';

export default function Filter() {
  return (
    <div>
      <h4 className={css.title}>Шукаєш щось тематичне?</h4>
      <ul className={css.wrapList}>
        <li className={css.item}>
          <p>Різдвяні</p>
        </li>
        <li>
          <p>Пасхальні</p>
        </li>
        <li>
          <p>Helloween</p>
        </li>
        <li>
          <p>Valentine's Day</p>
        </li>
      </ul>
    </div>
  );
}
