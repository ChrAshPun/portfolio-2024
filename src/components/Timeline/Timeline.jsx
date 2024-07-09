import SuitcaseSvg from "/src/assets/svgs/suitcase-solid.svg";
import styles from './Timeline.module.sass';

const Timeline = ({ iconType }) => {
  return (
    <div className={styles.timeline}>
      { iconType == 'suitcase' ? 
        <img src={SuitcaseSvg} alt="Suitcase SVG" /> 
        : 
        <>
          <div className={styles['sm-vertical-line']}></div>
          <div className={styles.circle}></div>
        </>
      }
      <div className={styles['lg-vertical-line']}></div>
    </div>
  )
}

export default Timeline;