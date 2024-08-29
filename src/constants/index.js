import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  firebase,
  enact,
  jd,
  hometown,
  babysitting,
  zwigato,
  zestgeek,
  watafact,
  friendzy,
  medidashboard,
  zestcommerce
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Mobile Application Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Zestgeek Solutions Pvt Ltd.",
    icon: zestgeek,
    iconBg: "#fff",
    date: "Aug 2023 - Present",
    points: [
      "I am currently employed at Zestgeek Solutions as an Associate React Native Developer with 1.5 years of experience.",
      "In this role, I actively contribute to the development of mobile applications using React Native technology.",
      "Working closely with a team of experienced developers, I focus on delivering high-quality solutions to meet client requirements and enhance user experiences.",
      "I've worked on a number of projects, including a Patient Medical application, Friendzy(Dating app), Vietlist (Business directory app), Chat App(SAAS Based), Watafact App(Social media App), Ecommerce Template.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "enAct eServices Pvt Ltd.",
    icon: enact,
    iconBg: "#fff",
    date: "Feb 2023 - Jul 2023",
    points: [
      "I specialize in building cross-platform mobile applications using JavaScript and React.",
      "I have a strong understanding of the core concepts of React Native and how to use them to build scalable, performant, and intuitive mobile apps.",
      "I'm well-versed in various libraries, tools, and frameworks commonly used in React Native development, such as Redux, React Navigation, and Expo.",
      "I've worked on a number of projects, including a Food Delivery application, a parcel Delivery application, and a Baby sitting application.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "JD Web Services",
    icon: jd,
    iconBg: "#fff",
    date: "March 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using HTML, CSS, Bootstrap, and JavaScript and other related technologies.",
      "I've specialized in building responsive frontends for websites and have also gained proficiency in PHP and MySQL.",
      "I've worked on a number of projects, including a hospital website, a school website, and a Canadian transport service website.",
      "I've been responsible for designing and implementing the frontend, ensuring that the websites are user-friendly, visually appealing, and accessible on different devices.",
      "I've also collaborated with backend developers to integrate frontend and backend functionalities seamlessly.",
      "I'm a detail-oriented developer who takes pride in delivering high-quality work, and I'm always eager to learn new technologies and approaches to improve my skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Watafact",
    description:
      "Unlock daily facts that surprise! Dive into Watafact and feed your curiosity with bite-sized, verified knowledge. Join our community of fact enthusiasts today!",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Social Auths",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Strapi",
        color: "pink-text-gradient",
      },
    ],
    image: watafact,
    source_code_link: "https://github.com/Lovishchugh01",
  },
  {
    name: "Friendzy",
    description:
      "Smart Matchmaking: ConnectMingle employs advanced algorithms to analyze user profiles, preferences, and behaviors, delivering personalized match suggestions tailored to your unique interests.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase Functions",
        color: "green-text-gradient",
      },
      {
        name: "Full Stack",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: friendzy,
    source_code_link: "https://github.com/Lovishchugh01",
  },
  {
    name: "Medi-dashboard",
    description:
      "Designed for patients whose care provider is using a Medi-Dashboard product. The app provides on demand clinical questionnaires. This allows your progress to be tracked, so that you can discuss it when you next see your clinician.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Victory Charts",
        color: "pink-text-gradient",
      },
      {
        name: "firebase push notifications",
        color: "blue-text-gradient",
      },
    ],
    image: medidashboard,
    source_code_link: "https://github.com/Lovishchugh01",
  },
  {
    name: "Zestcommerce",
    description:
      "Transform Your Shopping Experience with ZestCommerce: The Ultimate Mobile Destination for Seamless, Smart, and Effortless Online Shopping!",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: zestcommerce,
    source_code_link: "https://github.com/Lovishchugh01",
  },
  {
    name: "Zwigato",
    description:
      "Web application that enables a peer-to-peer delivery service offered by enAct eServices, where users can send and receive packages and documents within a specified area.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Mapbox",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: zwigato,
    source_code_link: "https://github.com/Lovishchugh01",
  },
  {
    name: "Baby Sitting",
    description:
      "A babysitting app connects parents with qualified babysitters, enabling easy booking, scheduling, and communication for reliable and convenient childcare services.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: babysitting,
    source_code_link: "https://github.com/Lovishchugh01",
  },
  {
    name: "HomeTown",
    description:
      "Web-based platform marketplace for the houses around you. A person can see the glimpses of the owner house and can know the basic details of the house",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hometown,
    source_code_link: "https://github.com/Lovishchugh01/HomeTown",
  },
];

export { services, technologies, experiences, testimonials, projects };
