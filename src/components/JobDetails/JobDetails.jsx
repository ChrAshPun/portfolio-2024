import Timeline from "../Timeline/Timeline"
import Carousel from '../Carousel/Carousel'
import LocationSVG from '/src/assets/svgs/location.svg?react'
import styles from './JobDetails.module.sass'

const JobDetails = ({ jobinfo, isCollapsed }) => {
  return (
    <section>
      <div className={styles['column']}>
        <div className={styles['row']}>
          <div className={styles['vertical-line']}></div>
          <div className={styles['info']}>
            <div className={styles['first-row']}>
              <p className={styles['position']}>{jobinfo.position}</p>
              <div className={styles['location']}>
                <LocationSVG className={styles['location-svg']}/>
                <p>{jobinfo.location}</p>
              </div>
            </div>
            <div className={styles['second-row']}>
              <p className={styles['company']}>{jobinfo.company}</p>
              <p className={styles.datesOfEmployment}>{jobinfo.datesOfEmployment}</p>
            </div>
          </div>
        </div>
        { jobinfo.company === 'Converseon.AI' ? <Carousel isCollapsed={isCollapsed} /> : null }
        <p className={styles['description']}>{ jobinfo.description }</p>
      </div>
      <Timeline iconType={jobinfo.iconType} />
    </section>
  )
}

export default JobDetails;