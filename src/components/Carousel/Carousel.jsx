import { useState } from 'react';
import ManageDatasetsBefore from '../../assets/slides/manage-datasets-before.png';
import ManageDatasetsAfter from '../../assets/slides/manage-datasets-after.png';
import TopicChartsBefore from '../../assets/slides/topic-charts-before.png';
import TopicChartsAfter from '../../assets/slides/topic-charts-after.png';
import ConversusIconBefore from '../../assets/slides/conversus-icon-before.png';
import ConversusIconAfter from '../../assets/slides/conversus-icon-after.png';
import EpitomeLoginBefore from '../../assets/slides/epitome-login-before.png';
import EpitomeLoginAfter from '../../assets/slides/epitome-login-after.png';
import styles from './Carousel.module.sass';

const Carousel = ({ isCollapsed }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };


  const slides = [
    {
      src: ManageDatasetsBefore,
      alt: "manage-datasets-before.png",
      tag: "Before",
    },
    {
      src: ManageDatasetsAfter,
      alt: "manage-datasets-after.png",
      tag: "After",
    },
    {
      src: TopicChartsBefore,
      alt: "topic-charts-before.png",
      tag: "Before",
    },
    {
      src: TopicChartsAfter,
      alt: "topic-charts-after.png",
      tag: "After",
    },
    {
      src: ConversusIconBefore,
      alt: "conversus-icon-before.png",
      tag: "Before",
    },
    {
      src: ConversusIconAfter,
      alt: "conversus-icon-after.png",
      tag: "After",
    },
    {
      src: EpitomeLoginBefore,
      alt: "epitome-login-before.png",
      tag: "Before",
    },
    {
      src: EpitomeLoginAfter,
      alt: "epitome-login--after.png",
      tag: "After",
    },
  ];

  return (
    <div className={styles.carousel}>
      <div style={{ height: isCollapsed ? '448px' : '353px' }} className={styles.slides}>
        <div className={styles.foreground} onClick={nextSlide}>
          <div className={styles.slide}>
            <img
              src={slides[activeSlide].src}
              alt={slides[activeSlide].alt}
            />
            <p className={`${styles.tag} ${styles.blue}`}>{slides[activeSlide].tag}</p>
          </div>
        </div>
      </div>
      <div className={styles['carousel-indicators']}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.circle} ${activeSlide === index ? styles['active-blue-circle'] : styles['blue-circle']}`}
            onClick={() => setActiveSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;