/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hriday Mehta",
  title: "Hi all, I'm Hriday",
  subTitle: emoji(
    "A passionate Computer Science Engineering Student 🚀 exploring Full Stack Development, AI, and Software Engineering."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/hriday-mehta-98a457395/",
  gmail: "hridaymehta8@gmail.com",
  instagram: "",
  twitter: "https://x.com/Hriday07mehta",
  kaggle: "",
  codeforces: "https://codeforces.com/profile/darkphoenix2208",
  codechef: "https://www.codechef.com/users/msdhm07op",
  display: true // Set true to display this section, defaults to true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "COMPUTER SCIENCE ENGINEERING STUDENT EXPLORING FULL STACK DEVELOPMENT & AI",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web applications"
    ),
    emoji("⚡ Experience creating multi-tenant SaaS platforms and PWA"),
    emoji(
      "⚡ Building AI-powered applications including RAG pipelines and AST static analysis"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Bharatiya Vidya Bhavan’s Sardar Patel Institute of Technology",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader:
        "Bachelor of Technology (B.Tech), Computer Science and Engineering",
      duration: "Sep 2024 – Present",
      desc: "CGPA 9.65. Achieved great academic standing.",
      descBullets: []
    },
    {
      schoolName: "Navneet College of Arts, Science & Commerce",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Higher Secondary Certificate (HSC), Science",
      duration: "Jun 2023 – May 2024",
      desc: "Achieved 90.2%",
      descBullets: []
    },
    {
      schoolName: "Kishinchand Chellaram College (KC College)",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Higher Secondary Certificate (HSC), Science",
      duration: "Aug 2022 – May 2023",
      desc: "Achieved 88.83%",
      descBullets: []
    },
    {
      schoolName: "The Universal School, Tardeo",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader:
        "International General Certificate in Secondary Education (IGCSE)",
      duration: "Sep 2009 – May 2022",
      desc: "Achieved 96.66% in boards.",
      descBullets: ["School rank 1 in 2022."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY RECENT PROJECTS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "SENSEASE – Mental Health & Wellness Platform",
      projectDesc:
        "Architected a secure multi-tenant SaaS platform with Supabase RLS, stateless authentication, and RBAC-governed real-time communication using Socket.IO and WebRTC. Engineered a sub-second, voice-to-voice RAG pipeline.",
      footerLink: []
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "CODEFORGE",
      projectDesc:
        "Engineered a high-performance web-based IDE using the Monaco Editor; achieved <1ms typing latency. Architected an interactive technical assessment platform leveraging the Web Speech API and LLMs.",
      footerLink: []
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Torrentor(P2P)",
      projectDesc:
        "Implemented a Peer to Peer (P2P) file sharing system with functionality for automatic location of files. Applied concurrency principles and socket programming abstractions in C++ ensuring secure file transmission.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards And Achievements 🏆 "),
  subtitle: "Key milestones and accomplishments in my journey.",

  achievementsCards: [
    {
      title: "Winner – Smart India Hackathon (SIH) 2025",
      subtitle:
        "Problem Statement PS-25092 (National-level innovation challenge)",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "SIH Winner",
      footerLink: []
    },
    {
      title: "1st Runner-Up – CACULO Innovation Hackathon",
      subtitle:
        "National Level Hackathon at SVS Sridora Caculo College of Commerce and Management Studies.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Hackathon Runner-Up",
      footerLink: []
    },
    {
      title: "Competitive Programming Profile",
      subtitle:
        "Codeforces: Expert (Max Rating 1645), CodeChef: 4★ Coder (Max 1802), Meta Hacker Cup 2025: Advanced to Round 2.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "CP Profile",
      footerLink: []
    },
    {
      title: "Academic Excellence",
      subtitle:
        "Secured Global Rank 1 in NPTEL : Soft Skill Development (IIT Kharagpur). JEE Main 2024: 99.37 percentile, ranked among the top 0.63%.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Academic Achievements",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+919820155045",
  email_address: "hridaymehta8@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Hriday07mehta", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
