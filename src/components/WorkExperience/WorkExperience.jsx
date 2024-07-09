import { memo } from 'react';
import WorkExperienceTitle from '../WorkExperience/WorkExperienceTitle'
import ITCertification from '../ITCertification/ITCertification';
import PersonalProject from '../PersonalProject/PersonalProject';
import Job from '../JobDetails/JobDetails';
import styles from './WorkExperience.module.sass'

const ITCertificationCmp = memo(({ certification }) => <ITCertification certification={certification} />);
const PersonalProjectCmp = memo(({ project, isCollapsed }) => <PersonalProject project={project} isCollapsed={isCollapsed} />);
const JobCmp = memo(({ jobinfo, isCollapsed }) => <Job jobinfo={jobinfo} isCollapsed={isCollapsed} />);

const WorkExperience = ({ JobPositions, ITCertifications, PersonalProjects, isCollapsed, windowWidth }) => {
  return (
    <div className={styles['right-section']}>
      { windowWidth <= 480 ? <WorkExperienceTitle/> : null }
      <JobCmp jobinfo={JobPositions.FingerprintJS} />
      <PersonalProjectCmp project={PersonalProjects.DailyLanguage} isCollapsed={isCollapsed}/>
      <PersonalProjectCmp project={PersonalProjects.ITBlog} isCollapsed={isCollapsed}/>
      <JobCmp jobinfo={JobPositions.ConverseonAI} isCollapsed={isCollapsed} />
      <ITCertificationCmp certification={ITCertifications.RHCSA} />
      <ITCertificationCmp certification={ITCertifications['AWS Developer Associate']} />
      <ITCertificationCmp certification={ITCertifications['AWS Solutions Architect']} />
      <ITCertificationCmp certification={ITCertifications['CompTIA Network+']} />
      <ITCertificationCmp certification={ITCertifications['MCSA Windows 10']} />
      <ITCertificationCmp certification={ITCertifications['MCSA Office 365']} />
      <JobCmp jobinfo={JobPositions.AlincoIT} />
      <ITCertificationCmp certification={ITCertifications['CompTIA A+']} />
    </div>
  )
}

export default WorkExperience;