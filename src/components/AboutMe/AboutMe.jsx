import css from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={css.aboutMeContainer}>
      <h2 className={css.title}>Давайте знайомитися!</h2>
      <div className={css.wrap}>
        <div className={css.textWrap}>
          <p className={css.text}>
            Привіт! Мене звати Валя, і я рада поділитися з
            <span className={css.accent}> Вами</span> своєю творчістю. Моя
            історія в'язання розпочалася восени 2018 року, коли на світ з'явився
            мій племінник. Уже через кілька днів після його народження я взяла
            до рук гачок і створила свою першу іграшку спеціально для нього.
            Відтоді в'язання стало для мене справжньою пристрастю і джерелом
            натхнення.
            <br />
            <br />
            Це маленьке хобі, яке починалося з любові до сім'ї, перетворилося на
            улюблену роботу. Тепер я створюю авторські іграшки, сповнені тепла і
            турботи, для багатьох дітей. Також я ділюся своїми знаннями, пишучи
            <span className={css.accent}> майстеркласи</span>, щоб інші могли
            розділити мою радість від в'язання.
          </p>
        </div>

        <img
          className={css.img}
          src="/public/img/ВалентинаСеменюк.jpeg"
          alt="Валентина Семенюк"
          width="420px"
          height="470px"
          loading="lazy"
        />
      </div>
    </div>
  );
}
