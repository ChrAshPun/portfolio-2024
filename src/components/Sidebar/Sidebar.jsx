import SidebarSvg from "/src/assets/svgs/sidebar.svg?react";
import EmailSvg from "/src/assets/svgs/envelope-regular.svg?react";
import LocationSvg from "/src/assets/svgs/location.svg?react";
import LinkedInSvg from "/src/assets/svgs/linkedin.svg?react";
import GitHubSvg from "/src/assets/svgs/github.svg?react";
import styles from './Sidebar.module.sass';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <section 
      style={{ maxWidth: isCollapsed ? '34px' : '220px' }}
      className={styles.sidebar}
    >
      <SidebarSvg className={styles['sidebar-svg']} onClick={toggleSidebar}/>
      {isCollapsed ? 
        <div className={styles['collapsed']}>
          <div className={styles['gray-divider']}></div>
          <a className={styles['icon-lg']} href="https://www.linkedin.com/in/christina-punla/" target="_blank">
            <LinkedInSvg className={styles['linkedin-svg']}/>
          </a>
          <a className={styles['icon-lg']} href="https://github.com/ChrAshPun/" target="_blank">
            <GitHubSvg className={styles['github-svg']}/>
          </a>
        </div>
        :
        <div className={styles['open']}>
          <p id={styles.contact}>CONTACT</p>
          <div className={styles['blue-divider']}></div>
          <div className={styles['items-with-icons']}>
            <a href="#">
              <LocationSvg className={styles['location-svg']}/>
              <p>New Jersey, USA</p>
            </a>
            <a href="#">
              <EmailSvg className={styles['email-svg']}/>
              <p>punlac1222@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/christina-punla/" target="_blank" className={styles.link}>
              <LinkedInSvg className={styles['linkedin-svg']}/>
              <p>LinkedIn</p>
            </a>
            <a href="https://github.com/ChrAshPun/" target="_blank" className={styles.link}>
              <GitHubSvg className={styles['github-svg']}/>
              <p>GitHub</p>
            </a>
          </div>
          <div>
            <p>SKILLS</p>
            <ul className={styles.items}>
              <li>JavaScript</li>
              <li>HTML / CSS</li>
              <li>React</li>
              <li>Vue.js</li>
              <li>Django</li>
              <li>D3.js</li>
              <li>NGINX</li>
              <li>SQL</li>
              <li>Amazon Web Services</li>
              <li>Adobe Creative Suite</li>
            </ul>
          </div>
          <div>
            <p>IT CERTIFICATIONS</p>
            <ul className={styles.items}>
              <li>Red Hat Certified System Administrator</li>
              <li>AWS Developer Associate</li>
              <li>AWS Solutions Architect</li>
            </ul>
          </div>
          <div>
            <p>EDUCATION</p>
            <ul className={styles.items}>
              <li>Bachelor of Science in Biology</li>
              <li>Ramapo College of NJ</li>
              <li><span className={styles['italic']}>Dean&apos;s List</span></li>
            </ul>
          </div>
        </div>
      }
    </section>
  )
}

export default Sidebar;