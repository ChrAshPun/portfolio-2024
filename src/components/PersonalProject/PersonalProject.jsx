import { useEffect, useRef } from 'react'
import PlaySvg from '../../assets/svgs/play-solid.svg?react'
import Timeline from "../Timeline/Timeline"
import styles from "./PersonalProject.module.sass"

const PersonalProject = ({ project, isCollapsed }) => {
  
  const videoMP4 = useRef(null);

  useEffect(() => {
    videoMP4.current.pause()
    videoMP4.current.currentTime = 0
  }, [isCollapsed]);

  const handleOnMouseEnter = () => {
    videoMP4.current.currentTime = 0
    videoMP4.current.play()
  }

  const handleOnMouseLeave = () => {
    videoMP4.current.pause()
    videoMP4.current.currentTime = 0
  }

  return (
    <section className={styles.project}>
      <div className={styles['info']}>
        <div className={styles['row']}>
          <div className={styles['vertical-line']}></div>
          <div className={styles['project-row']}>
            <div><p className={styles.name}>{project.name}</p><p className={styles['personal-project']}>Personal Project</p></div>
            <p className={styles.date}>{project.date}</p>
          </div>
        </div>
        <div className={styles.video}>
          <video ref={videoMP4} loop muted onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <source src={project.mp4}/>
          </video>
          <PlaySvg className={styles['play-svg']}/>
        </div>
        <p className={styles.description}>{project.description}</p>
        <button className={styles['view-btn']}>
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer">View</a>
        </button>
        <button className={styles['github-btn']}>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </button>
      </div>
      <Timeline iconType="circle"/>
    </section>
  );
}

export default PersonalProject;