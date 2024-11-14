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
  username: "Eric Allen",
  title: "Hi all, I'm Eric",
  subTitle: emoji(
    "A results-driven Senior Software Engineer with extensive experience in delivering scalable, high-performance web applications. Skilled in Ruby, JavaScript, PHP, and Python, with expertise in agile development, collaborative problem-solving, and a strong focus on industry best practices."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pjKOUcdDYAZRKmwuj0tKIqe3Hpkv1Btw/view?usp=sharing", // Your actual resume link
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/esquith",
  linkedin: "https://www.linkedin.com/in/esquith/",
  gmail: "esquithallen@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER WITH A PASSION FOR BUILDING HIGH-QUALITY APPLICATIONS",
  skills: [
    emoji("⚡ Develop and maintain robust backend and frontend applications"),
    emoji("⚡ Build scalable microservices and web applications"),
    emoji("⚡ Integration of third-party services and APIs")
  ],
  softwareSkills: [
    {skillName: "Ruby", fontAwesomeClassname: "fas fa-gem"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Vue.js", fontAwesomeClassname: "fab fa-vuejs"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Carleton University",
      logo: require("./assets/images/carletonLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "",
      desc: "Focused on software engineering principles, algorithms, and data structures.",
      descBullets: [
        "Participated in coding competitions and hackathons",
        "Excelled in courses related to software development and database management"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Fullstack Development", progressPercentage: "95%"},
    {Stack: "Project Management", progressPercentage: "85%"},
    {Stack: "Frontend Development", progressPercentage: "70%"}
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Freelance Software Engineer",
      company: "Self-employed",
      date: "Aug 2022 - Present",
      desc: "Managed web development projects and delivered high-quality, client-focused solutions."
    },
    {
      role: "Application Support Engineer (Contract)",
      company: "Text Groove",
      date: "Dec 2023 - Apr 2024",
      desc: "Enhanced platform functionality and addressed technical issues for improved user experience."
    },
    {
      role: "Brewing Engineer",
      company: "Molson Coors Beverage Company",
      date: "Dec 2022 - Dec 2023",
      desc: "Developed web applications for brewery management and integrated IoT systems."
    },
    {
      role: "Senior Software Engineer",
      company: "Wallrus Creative Technologies",
      date: "Oct 2022 - Dec 2022",
      desc: "Increased organic traffic by 50% and contributed to customer acquisition through feature development."
    },
    {
      role: "Senior Software Engineer",
      company: "Datadocks",
      date: "Jan 2022 - Jul 2022",
      desc: "Optimized application performance with WebSockets and built appointment-scheduling features."
    }
  ]
};

// Achievements and Certifications Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Recognitions, Certifications, and Awards that enhance my profile",
  achievementsCards: [
    {
      title: "Certified Ruby Developer",
      subtitle:
        "Completed a comprehensive certification program for Ruby programming, mastering advanced techniques and best practices.",
      image: "/rubyCertification.svg", // Updated path after moving to public
      imageAlt: "Ruby Certification",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://example.com/ruby-certification"
        }
      ]
    },
    {
      title: "JavaScript Algorithms and Data Structures Certification",
      subtitle:
        "Awarded by freeCodeCamp for demonstrating proficiency in JavaScript and problem-solving using data structures and algorithms.",
      image: require("./assets/images/javascriptCertification.png"),
      imageAlt: "JavaScript Certification",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.freecodecamp.org/certification"
        }
      ]
    },
    {
      title: "AWS Certified Developer – Associate",
      subtitle:
        "Recognized for proficiency in deploying and managing applications on the AWS platform.",
      image: "/awsCertification.svg",
      imageAlt: "AWS Certification",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://aws.amazon.com/certification"
        }
      ]
    }
  ],
  display: true
};

// Big Projects Section
const bigProjects = {
  title: "Big Projects",
  subtitle: "A few of the major projects I've contributed to",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Text Groove",
      projectDesc: "Platform enhancements and performance improvements.",
      footerLink: [{name: "Visit Website", url: "https://www.textgroove.com/"}]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Wallrus Creative Technologies",
      projectDesc: "Developed features to improve SEO and increase traffic.",
      footerLink: [{name: "Visit Website", url: "http://wallrus.tech/"}]
    }
  ],
  display: true
};

// Blog Section
const blogSection = {
  title: "",
  subtitle: "",
  displayMediumBlogs: "true", // Set to "true" if you want to fetch blogs from Medium
  blogs: [
    {
      url: "https://medium.com/@esquith",
      title: "Why React is the Best",
      description:
        "A discussion on why React is a powerful framework for frontend development."
    }
  ],
  display: false
};

// Open Source Section
const openSource = {
  showGithubProfile: "true", // Set true or false to show GitHub profile link
  display: true // Set false to hide this section
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: "I enjoy speaking and sharing knowledge.",
  talks: [
    {
      title: "Building with React",
      subtitle: "Presented at React Conf 2023",
      slides_url: "https://example.com/react-talk",
      event_url: "https://reactconf.com/"
    }
  ],
  display: false // Set false to hide this section if not in use
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume.",
  display: true // Set to true to display the section
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I love to talk about technology and share insights.",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Eric-Allen-from-Toronto--Canada-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section if not used
};

// Contact Information
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out for collaborations or just a chat!",
  number: "",
  email_address: "esquithallen@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", // Replace "twitter" with your Twitter username without "@"
  display: false // Set true to display Twitter section
};

const isHireable = false; // Set false if you are not looking for a job

export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  achievementSection,
  bigProjects,
  blogSection,
  openSource,
  talkSection,
  resumeSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
