import { useState, useEffect } from 'react'
import CodeSvg from "../../assets/svgs/code-solid.svg?react";
import ProfilePic from "../../assets/imgs/profile-pic.jpg";
import EmailSvg from "/src/assets/svgs/envelope-regular.svg?react";
import LinkedInSvg from "/src/assets/svgs/linkedin.svg?react";
import GitHubSvg from "/src/assets/svgs/github.svg?react";
import ArrowDownSvg from "/src/assets/svgs/arrow-down-solid.svg?react";
import styles from './NavbarMobile.module.sass';

const NavbarMobile = () => {
  const [scrollTo, setScrollTo] = useState(null)

  useEffect(() => {
    setScrollTo(document.getElementById('scrollTo'))
  },[])

  const handleScroll = () => scrollTo.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className={styles['nav-mobile']}>
      <div className={styles['section-one']}><CodeSvg className={styles['code-svg']}/><p>Web Portfolio</p></div>
      <div className={styles['section-two']}>
        <div className={styles['profile-pic']}>
          <div><img src={ProfilePic} alt="profile-pic.jpg"/></div>
        </div>
        <h6>Christina<br/>Punla</h6>
        <p>Front-End Developer | IT Support<br/>based in New Jersey</p>
        <div>
          <a href="mailto:punlac1222@gmail.com" target="_blank"><EmailSvg className={styles['email-svg']}/></a>
          <a href="https://www.linkedin.com/in/christina-punla/" target="_blank"><LinkedInSvg className={styles['linkedin-svg']}/></a>
          <a href="https://github.com/ChrAshPun" target="_blank"><GitHubSvg className={styles['github-svg']}/></a>
        </div>
      </div>
      <div></div>
      <ArrowDownSvg className={styles['arrow-down-svg']} onClick={handleScroll}/>
    </nav>
  )
}

export default NavbarMobile;