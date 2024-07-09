import CodeSvg from "../../assets/svgs/code-solid.svg";
import styles from './Navbar.module.sass';

const Navbar = () => {
  return (
    <nav className={styles['nav-desktop']}>
      <div className={styles.logo}>
        <img src={CodeSvg} alt="Code SVG" />
        <p>Web Portfolio</p>
      </div>
      <div className={styles.center}>
        <p>Christina Punla</p>
        <p>Front-End Developer | IT Support</p>
      </div>
      <p className={styles.link}>Work Experience</p>
    </nav>
  )
}

export default Navbar;