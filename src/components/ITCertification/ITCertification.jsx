import Timeline from '../Timeline/Timeline';
import styles from './ITCertification.module.sass';

const ITCertification = ({ certification }) => {
  return (
    <div className={styles.content}>
      <section className={styles['it-cert']}>
        <p className={styles.name}>Obtained {certification.name} Certification</p>
        <p className={styles.date}>{certification.date}</p>
      </section>
      <Timeline iconType={'circle'} />
    </div>
  )
}

export default ITCertification;