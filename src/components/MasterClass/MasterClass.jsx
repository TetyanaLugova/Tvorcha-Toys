import { useState } from 'react';
import DetaliesMasterClass from '../DetaliesMasterClass/DetaliesMasterClass';
import ModalMasterClass from '../Modal/Modal';
import css from './MasterClass.module.css';

export default function MasterClass() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = [
    {
      title: 'МК "Корівка Му"',
      price: '150 ₴',
      img: '/public/img/Корівка_Му-min.jpg',
      details: <DetaliesMasterClass />, // Вкладені деталі кожного майстер-класу
    },
    {
      title: 'МК "Кроличка"',
      price: '150 ₴',
      img: '/public/img/Кроличка-min.jpg',
      details: <DetaliesMasterClass />,
    },
    {
      title: 'МК "Корівка з бумбонами"',
      price: '150 ₴',
      img: 'public/img/Корівка_з_бомбонами-min.jpg',
      details: <DetaliesMasterClass />,
    },
    {
      title: 'МК "Пряничка"',
      price: '150 ₴',
      img: '/public/img/Пряничка-min.jpg',
      details: <DetaliesMasterClass />,
    },
    {
      title: 'МК "Панда"',
      price: '150 ₴',
      img: '/public/img/Панда-min.jpg',
      details: <DetaliesMasterClass />,
    },
    {
      title: 'МК "Курчатко"',
      price: '150 ₴',
      img: '/public/img/Курчатко-min.JPG',
      details: <DetaliesMasterClass />,
    },
    {
      title: 'МК "Зефірка"',
      price: '150 ₴',
      img: '/public/img/Зефірка-min.jpg',
      details: <DetaliesMasterClass />,
    },
    {
      title: 'МК "Мишка Мія"',
      price: '150 ₴',
      img: '/public/img/Мишка_Мія-min.jpg',
      details: <DetaliesMasterClass />,
    },
    // Інші майстер-класи
  ];
  // Функція для відкриття модального вікна
  const handleOpenModal = selected => {
    setSelectedClass(selected);
    setIsModalOpen(true);
  };

  // Функція для закриття модального вікна
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClass(null);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Майстеркласи</h2>
      <p className={css.text}>Створивши одну, Ви обов'язково захочете ще...</p>
      <ul className={css.list}>
        {classes.map((mc, index) => (
          <li key={index} className={css.item}>
            <img
              className={css.img}
              src={mc.img}
              alt={mc.title}
              width="200px"
              height="180px"
              loading="lazy"
              onClick={() => handleOpenModal(mc)}
            />
            <div className={css.wrapInfo}>
              <div className={css.wrapText}>
                <p className={css.textMc}>{mc.title}</p>
                <p className={css.textMc}>{mc.price}</p>
              </div>
              <div className={css.wrapBtn}>
                <button className={css.btn} onClick={() => handleOpenModal(mc)}>
                  Детальніше
                </button>
                <button className={css.btn}>Придбати</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <ModalMasterClass isOpen={isModalOpen} onClose={handleCloseModal}>
          {selectedClass?.details}
          {/* Відображення деталей вибраного майстер-класу */}
        </ModalMasterClass>
      )}
    </div>
  );
}
