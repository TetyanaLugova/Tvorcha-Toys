import css from './Hero.module.css';

export default function Hero() {
  return (
    <div className={css.hero}>
      <h1 className={css.heroTitle}>Виплети радість</h1>
      <p className={css.heroText}>Майстеркласи з в'язання гачком іграшок</p>
      <p className={css.heroBtn}>Придбати тут</p>
    </div>
  );
}
