import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import WorkExperience from '../WorkExperience/WorkExperience'
import styles from './Main.module.sass'
import ITBlogv3PNG from "../../assets/imgs/IT-Blog-v3.png";
import DailyLanguagePNG from "../../assets/imgs/daily-language.png";
import DailyLanguageMP4 from "../../assets/gifs/daily-language-mp4.mp4"
import ITBlogMOV from "../../assets/gifs/it-blog-mov.mov"

const JobPositions = {
  'FingerprintJS': {
    position: 'Customer Success Engineer',
    location: 'Remote',
    company: 'FingerprintJS, Inc',
    datesOfEmployment: 'Oct 2023 - Apr 2024',
    description: `At FingerprintJS, I provided technical support for hundreds of customers 
    and investigated technical issues using SQL queries. I educated customer on best practices 
    on how to use FingerprintJS's APIs effectively. I proactively monitored users' API usage and performance to 
    identify and resolve potential issues before they impacted customers. I conducted 
    interviews with churned customers to understand their concerns so they could rejoin the platform.`,
    iconType: 'suitcase',
  },
  'ConverseonAI': {
    position: 'Front End Developer',
    location: 'New York, NY',
    company: 'Converseon.AI',
    datesOfEmployment: 'June 2021 - Oct 2022',
    description: `
      At Converseon.AI, I designed and implemented the frontend for 2 data intelligence 
      applications used by Fortune 500 companies. I designed the UI using Adobe XD and 
      implemented the frontend using Vue.js and Quasar. I created engaging 
      data visualizations (scatter plots, force simulations, data tables) using D3.js 
      and enjoyed collaborating with the backend developers.`,
    iconType: 'circle',
  },
  'AlincoIT': {
    position: 'Help Desk Technician', 
    location: 'Fullerton, CA',
    company: 'Alinco IT, Inc', 
    datesOfEmployment: 'Jan 2018 - Nov 2019',
    description: `
      My first opportunity in the tech industry was as a helpdesk technician. 
      I provided technical support via RDP fixing e-mails, printers, and anything computer related.
      I created Powershell scripts to handle repetitive tasks in Active Directory 
      and managed user mailboxes, distribution groups, and policies in Exchange Administration Center.`,
    iconType: 'circle',
  }
}

const ITCertifications = {
  'CompTIA A+': {
    name: 'CompTIA A+',
    date: 'Aug 2017'
  },
  'MCSA Office 365': {
    name: 'Microsoft Certified Solutions Associate: MCSA Office 365',
    date: 'Aug 2018'
  },
  'MCSA Windows 10': {
    name: 'Microsoft Certified Solutions Associate: MCSA Windows 10',
    date: 'Dec 2018'
  },
  'CompTIA Network+': {
    name: 'CompTIA Network+',
    date: 'Feb 2019'
  },
  'AWS Solutions Architect': {
    name: 'Amazon Web Services: AWS Solutions Architect',
    date: 'Jun 2019'
  },
  'AWS Developer Associate': {
    name: 'Amazon Web Services: AWS Developer Associate',
    date: 'Sep 2019'
  },
  'RHCSA': {
    name: 'Red Hat Certified System Administrator',
    date: 'Aug 2020'
  }
}

const PersonalProjects = {
  'ITBlog': {
    name: 'Helpdesk Technician Guide',
    date: 'Apr 2023',
    description: 
      `I created a personal blog that documents some of the technical issues I
      troubleshooted throughout my career in IT. The frontend was built with React and TypeScript.
      The backend was built with Django and I incorporated serializers to create
      RESTful APIs from Django models with one-to-many relationships.`,
    projectLink: 'https://christinapunla.dev/itblog',
    githubLink: 'https://github.com/ChrAshPun/IT-Blog-v3',
    img: {
      src: ITBlogv3PNG,
      alt: "IT-Blog-v3.png"
    },
    mp4: ITBlogMOV
  },
  'DailyLanguage': {
    name: 'Spanish Learning Application',
    date: 'Apr 2023',
    languages: ['React', 'Redux', 'TypeScript', 'Django', 'Amazon Web Services', 'NGINX', 'Adobe XD'],
    description: `A full stack application with exercises designed for learning Spanish.
    Hosted on an AWS EC2 Ubuntu instance with an NGINX proxy server and Gunicorn (WSGI).
    The frontend was built with React/Redux and TypeScript. The backend was built with Django.`,
    projectLink: 'https://christinapunla.dev/dailylanguage',
    githubLink: 'https://github.com/ChrAshPun/daily-language-fullstack',
    img: {
      src: DailyLanguagePNG,
      alt: "daily-language.png"
    },
    mp4: DailyLanguageMP4
  }
}

const Main = ({ windowWidth }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={styles.main}>
      { windowWidth <= 480 ? null :       
        <Sidebar 
          isCollapsed={sidebarCollapsed === true}
          toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
        /> 
      }
      <WorkExperience 
        JobPositions={JobPositions}
        ITCertifications={ITCertifications}
        PersonalProjects={PersonalProjects}
        isCollapsed={sidebarCollapsed === true} 
        windowWidth={windowWidth}
      />
    </div>
  )
}

export default Main;