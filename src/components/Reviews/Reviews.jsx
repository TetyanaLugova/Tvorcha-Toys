import css from './Reviews.module.css';
import { GiNotebook } from 'react-icons/gi';
import { LuSend } from 'react-icons/lu';

export default function Reviews() {
  return (
    <div className={css.wrap}>
      <div className={css.wrapTitle}>
        <h2 className={css.title}>Відгуки</h2>
        <GiNotebook className={css.icon} />
      </div>

      <div className={css.card}>
        <p className={css.name}>Ім'я</p>
        <p className={css.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          error dolores, et ab blanditiis commodi necessitatibus praesentium
          tenetur, doloribus fugiat vero omnis sequi obcaecati ipsa magnam fuga
          earum provident facilis.
        </p>
      </div>
      <div className={css.card}>
        <p className={css.name}>Ім'я</p>
        <p className={css.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          error dolores, et ab blanditiis commodi necessitatibus praesentium
          tenetur, doloribus fugiat vero omnis sequi obcaecati ipsa magnam fuga
          earum provident facilis.
        </p>
      </div>
      <div className={css.card}>
        <p className={css.name}>Ім'я</p>
        <p className={css.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          error dolores, et ab blanditiis commodi necessitatibus praesentium
          tenetur, doloribus fugiat vero omnis sequi obcaecati ipsa magnam fuga
          earum provident facilis. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Veritatis error dolores, et ab blanditiis commodi
          necessitatibus praesentium tenetur, doloribus fugiat vero omnis sequi
          obcaecati ipsa magnam fuga earum provident facilis.
        </p>
      </div>
      <p className={css.titleForm}>Відгуки мотивують</p>
      <form className={css.form} action="">
        <input
          type="text"
          name="username"
          placeholder="Ім'я"
          className={css.input}
          required
        />
        <textarea
          type="text"
          name="comment"
          placeholder="Поділіться враженням"
          className={css.inputComent}
          required
        />
        <button className={css.btn}>
          {/* <LuSend className={css.iconBtn} /> */}
          {``}
          Залишити відгук
        </button>
      </form>
    </div>
  );
}
